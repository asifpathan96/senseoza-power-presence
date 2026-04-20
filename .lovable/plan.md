

## Update Contact Form: Make Message Optional + Add Validation

### Changes — `src/pages/Contact.tsx`

1. **Make message field optional**
   - Remove the red asterisk (`<span className="text-destructive">*</span>`) from the message label (line 281)
   - Remove `required` attribute from the `<Textarea>` element (line 291)

2. **Update form submission validation**
   - In `handleSubmit`, remove `!formData.message` from the required fields check (line 30)
   - Keep: name, email, phone as required fields
   - Message will be allowed as empty in the WhatsApp message template

3. **Add enhanced field validation**
   - **Name**: min 2 chars, max 100 chars, alphanumeric with spaces only
   - **Email**: valid email format (type="email" already handles basic validation)
   - **Phone**: valid phone format with +91 country code (starts with +91, 10 digits after)
   - **Website URL**: optional validation — if provided, must start with http:// or https://
   - Show specific error toast messages for each validation failure

4. **Add visual input feedback**
   - Add `aria-invalid` attributes when validation fails
   - Optional: add red border on invalid inputs (using state tracking)

### Security Enhancements
- Input length limits already present (controlled by HTML attributes)
- URL encoding for WhatsApp already implemented (`encodeURIComponent`)
- No sensitive data logging to console

