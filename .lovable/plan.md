

# Fix Cloudflare Worker for Prerender.io Integration

## Problem Summary

The Cloudflare Worker is correctly structured but has two key issues:
1. It doesn't detect `?_escaped_fragment_=` parameter (used for testing)
2. The route pattern may not be matching traffic correctly

---

## Solution Overview

### Part 1: Update Worker Code (Cloudflare Dashboard)

Add `_escaped_fragment_` detection so you can test in a normal browser:

```javascript
// User agents that should get pre-rendered content
const BOT_AGENTS = [
  // Search Engines
  "googlebot",
  "adsbot-google",
  "apis-google",
  "mediapartners-google",
  "bingbot",
  "yandexbot",
  "baiduspider",
  "duckduckbot",
  "slurp",
  // Social Media
  "facebookexternalhit",
  "facebookcatalog",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "pinterest",
  "slackbot",
  // AI Bots
  "gptbot",
  "claudebot",
  "anthropic-ai",
  "chatgpt",
  // SEO Tools
  "ahrefsbot",
  "semrushbot",
  "mj12bot",
  "dotbot",
];

// File extensions to ignore
const IGNORE_EXTENSIONS = [
  ".js", ".css", ".xml", ".less", ".png", ".jpg", ".jpeg",
  ".gif", ".pdf", ".doc", ".txt", ".ico", ".rss", ".zip",
  ".mp3", ".rar", ".exe", ".wmv", ".avi", ".ppt", ".mpg",
  ".mpeg", ".tif", ".wav", ".mov", ".psd", ".ai", ".xls",
  ".mp4", ".m4a", ".swf", ".dat", ".dmg", ".iso", ".flv",
  ".m4v", ".torrent", ".woff", ".ttf", ".svg", ".webmanifest",
  ".webp", ".woff2", ".eot"
];

export default {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest(request, env);
    } catch (err) {
      console.error('Worker error:', err);
      return new Response(`Worker Error: ${err.message}`, { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  },
};

async function handleRequest(request, env) {
  const url = new URL(request.url);
  const userAgent = request.headers.get("User-Agent")?.toLowerCase() || "";
  const pathName = url.pathname.toLowerCase();
  
  // Get file extension
  const lastDot = pathName.lastIndexOf(".");
  const extension = lastDot > -1 ? pathName.substring(lastDot).toLowerCase() : "";

  // NEW: Check for _escaped_fragment_ parameter (for testing)
  const hasEscapedFragment = url.searchParams.has("_escaped_fragment_");
  
  // NEW: Check for debug parameter (optional, for browser testing)
  const forcePrerender = url.searchParams.get("prerender") === "1";

  // Check if it's a bot
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));

  // NEW: Combined condition - prerender for bots OR escaped_fragment OR debug
  const shouldPrerender = isBot || hasEscapedFragment || forcePrerender;

  // Log the request
  console.log('Request:', {
    url: request.url,
    userAgent: userAgent.substring(0, 50),
    isBot: isBot,
    hasEscapedFragment: hasEscapedFragment,
    forcePrerender: forcePrerender,
    shouldPrerender: shouldPrerender,
    hasToken: !!env.PRERENDER_TOKEN,
    extension: extension
  });

  // Skip pre-rendering for file extensions
  if (extension.length && IGNORE_EXTENSIONS.includes(extension)) {
    console.log('Skipping: File extension');
    return fetch(request);
  }

  // NEW: Use combined condition instead of just isBot
  if (!shouldPrerender) {
    console.log('Skipping: Not a bot and no special params');
    return fetch(request);
  }

  // Check if token exists
  if (!env.PRERENDER_TOKEN) {
    console.error('ERROR: PRERENDER_TOKEN not set!');
    return new Response('Configuration Error: Prerender token not set', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  console.log('Prerendering! Reason:', isBot ? 'bot' : hasEscapedFragment ? 'escaped_fragment' : 'debug');
  
  // NEW: Clean URL before sending to Prerender (remove test params)
  const cleanUrl = new URL(url);
  cleanUrl.searchParams.delete("_escaped_fragment_");
  cleanUrl.searchParams.delete("prerender");
  
  const prerenderUrl = `https://service.prerender.io/${cleanUrl.toString()}`;
  
  try {
    const prerenderResponse = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': env.PRERENDER_TOKEN,
        'User-Agent': userAgent,
      },
    });

    console.log('Prerender response:', prerenderResponse.status);

    const body = await prerenderResponse.text();
    
    return new Response(body, {
      status: prerenderResponse.status,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Prerender-Status': prerenderResponse.status.toString(),
        'X-Served-By': 'prerender', // NEW: Debug header to confirm it worked
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error) {
    console.error('Prerender.io error:', error.message);
    return fetch(request);
  }
}
```

---

### Part 2: Fix Worker Route (Cloudflare Dashboard)

In Cloudflare Dashboard:

1. Go to **Workers Routes**
2. Delete the existing `*senseoza.com/*` route
3. Add new routes:
   - `senseoza.com/*`
   - `www.senseoza.com/*` (if you use www)

---

### Part 3: Add Prerender Ready Signal (React App)

To ensure Prerender.io waits for React Helmet to update metadata:

**File: index.html**
Add this script in the `<head>` section:
```html
<script>window.prerenderReady = false;</script>
```

**File: src/components/PrerenderReady.tsx** (new file)
```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrerenderReady = () => {
  const location = useLocation();

  useEffect(() => {
    // Signal that page is loading
    (window as any).prerenderReady = false;
    
    // After a short delay (to allow Helmet to update), signal ready
    const timer = setTimeout(() => {
      (window as any).prerenderReady = true;
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default PrerenderReady;
```

**File: src/App.tsx**
Add `<PrerenderReady />` inside the Router tree.

---

## Step-by-Step Instructions

| Step | Action | Where |
|------|--------|-------|
| 1 | Copy the updated Worker code above | Cloudflare Workers Dashboard |
| 2 | Click "Save and Deploy" | Cloudflare Workers Dashboard |
| 3 | Delete route `*senseoza.com/*` | Cloudflare Workers Routes |
| 4 | Add route `senseoza.com/*` | Cloudflare Workers Routes |
| 5 | Add route `www.senseoza.com/*` | Cloudflare Workers Routes |
| 6 | Approve this plan for React changes | Lovable |
| 7 | Publish the changes | Lovable |
| 8 | Recache all pages | Prerender.io Dashboard |

---

## Verification Steps

After deploying:

1. **Test with escaped_fragment**:
   - Visit: `https://senseoza.com/about?_escaped_fragment_=`
   - Open DevTools > Network tab
   - Look for `X-Served-By: prerender` header in response
   - View source should show full HTML with About page metadata

2. **Test with debug parameter**:
   - Visit: `https://senseoza.com/about?prerender=1`
   - Same verification as above

3. **Check Worker logs**:
   - Go to Cloudflare Dashboard > Workers > prerenderio > Logs
   - You should see log entries showing "Prerendering! Reason: escaped_fragment"

---

## Expected Outcome

After these changes:

| URL | Expected Result |
|-----|-----------------|
| `senseoza.com/` | Homepage metadata |
| `senseoza.com/?_escaped_fragment_=` | Prerendered homepage with correct title |
| `senseoza.com/about?_escaped_fragment_=` | Prerendered About page with "About Senseoza" title |
| `senseoza.com/about?prerender=1` | Same as above (debug mode) |

Each page will have unique, correct metadata visible to search engines.

