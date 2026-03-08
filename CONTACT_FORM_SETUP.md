# Contact Form Setup (EmailJS)

The portfolio contact form uses [EmailJS](https://www.emailjs.com/) to send messages from the browser—no server-side API or reCAPTCHA required.

## Current configuration

- **Service ID**: `service_albev6a`
- **Template ID**: `template_8oxgqzt`
- **Public Key**: Set in code (fallback) or via `PUBLIC_EMAILJS_PUBLIC_KEY`

Form field IDs (must match your EmailJS template variables):

- `id="contact-form"` — form element
- `id="name"` — sender name
- `id="email"` — sender email
- `id="subject"` — subject line
- `id="message"` — message body

## Optional: use an env variable for the public key

To override the default public key (e.g. for different environments), add to `.env`:

```
PUBLIC_EMAILJS_PUBLIC_KEY=M5uJuwcgRFLGWBXzn
```

In Vercel: **Settings** → **Environment Variables** → add `PUBLIC_EMAILJS_PUBLIC_KEY`.

## Testing

1. Open the site and scroll to the Contact section (or go to `/#contact`).
2. Fill in Name, Email, Subject, and Message.
3. Click **send message**.
4. You should see “Message sent successfully!” and receive an email like:

   ```
   Portfolio Contact: <subject>

   Name: <name>
   Email: <email>
   Subject: <subject>

   Message:
   <message>
   ```

## LIT site (separate service)

- **Service ID**: `service_qy59sir`
- **Template ID**: `template_af56krc`

Both can send to the same inbox; the template/subject can distinguish “Portfolio” vs “LIT” messages.

## Troubleshooting

- **Failed to send**: Check the browser console for EmailJS errors; confirm Service ID, Template ID, and Public Key in the [EmailJS dashboard](https://dashboard.emailjs.com/).
- **Template not receiving fields**: Ensure your EmailJS template uses variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` to match the form.
