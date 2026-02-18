# Contact Form Setup Guide

This guide will help you set up the contact form with reCAPTCHA and email functionality.

## Step 1: Set up Google reCAPTCHA

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"+"** to create a new site
3. Fill in the form:
   - **Label**: Portfolio Contact Form (or any name you prefer)
   - **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
   - **Domains**: Add your domain (e.g., `jakeestrada.org`, `www.jakeestrada.org`)
   - Accept the terms and click **Submit**
4. You'll receive two keys:
   - **Site Key** (public) - This goes in `PUBLIC_RECAPTCHA_SITE_KEY`
   - **Secret Key** (private) - This goes in `RECAPTCHA_SECRET_KEY`

## Step 2: Set up Email (Gmail Example)

### Option A: Gmail with App Password (Recommended)

1. Go to your Google Account settings
2. Enable **2-Step Verification** (required for App Passwords)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Option B: Other Email Providers

You can use any SMTP provider. Update these environment variables:
- `SMTP_HOST` - Your SMTP server (e.g., `smtp.gmail.com`, `smtp.outlook.com`)
- `SMTP_PORT` - Usually `587` for TLS or `465` for SSL
- `SMTP_USER` - Your email address
- `SMTP_PASSWORD` - Your email password or app password
- `SMTP_FROM` - The "from" email address

## Step 3: Configure Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=your_email@gmail.com
CONTACT_EMAIL=liminal.innovations@gmail.com
```

5. Make sure to select **Production**, **Preview**, and **Development** environments
6. Click **Save**

## Step 4: Redeploy

After adding the environment variables, Vercel will automatically redeploy. Or you can manually trigger a redeploy:
- Go to **Deployments** tab
- Click the **"..."** menu on the latest deployment
- Select **Redeploy**

## Testing

1. Visit your site's contact section
2. Fill out the form
3. Complete the CAPTCHA
4. Submit the form
5. Check your email (the one set in `CONTACT_EMAIL`) for the message

## Troubleshooting

### CAPTCHA not showing
- Make sure `PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Check that your domain is added to the reCAPTCHA site settings
- Clear browser cache

### Email not sending
- Verify all SMTP environment variables are set
- Check Vercel function logs: **Deployments** → Click deployment → **Functions** tab
- For Gmail, make sure you're using an App Password, not your regular password
- Verify `CONTACT_EMAIL` is set correctly

### Form submission errors
- Check browser console for errors
- Check Vercel function logs
- Verify all environment variables are set in Vercel

## Security Notes

- Never commit `.env` files to git
- Keep your `RECAPTCHA_SECRET_KEY` and `SMTP_PASSWORD` private
- The `PUBLIC_RECAPTCHA_SITE_KEY` is safe to expose (it's public by design)
- Consider rate limiting if you expect high traffic

