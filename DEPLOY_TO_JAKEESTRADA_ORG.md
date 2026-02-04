# Deployment Guide - Deploy to jakeestrada.org

## 🚀 Complete Deployment to Your Custom Domain

You own **jakeestrada.org** - this guide will get your portfolio live at that domain.

---

## STEP 1: Prepare Your Code for Deployment

### 1.1 Test Build Locally

Make sure everything works before deploying:

```bash
# Navigate to your project directory
cd portfolio-site

# Install dependencies (if you haven't already)
npm install

# Test the build
npm run build

# Preview the production build
npm run preview
```

✅ **If you see "Preview server listening on http://localhost:4321" and no errors, you're ready!**

### 1.2 Verify Your Domain Configuration

Check that `astro.config.mjs` has your domain:

```javascript
export default defineConfig({
  site: 'https://jakeestrada.org',  // ✅ This is correct!
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
```

---

## STEP 2: Push Your Code to GitHub

### 2.1 Initialize Git Repository

If you haven't already:

```bash
# In your project directory
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit - Jake Estrada Portfolio"

# Create main branch
git branch -M main
```

### 2.2 Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. **Repository settings:**
   - Repository name: `portfolio` (or `jakeestrada-portfolio`)
   - Description: "Personal portfolio website"
   - Visibility: **Public** (recommended) or **Private**
   - ❌ **DO NOT** check any boxes (no README, .gitignore, or license)
4. Click **"Create repository"**

### 2.3 Push to GitHub

GitHub will show you commands. Copy and run these:

```bash
# Add GitHub as remote (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push your code
git push -u origin main
```

**Example:** If your GitHub username is "JakeEstrada":
```bash
git remote add origin https://github.com/JakeEstrada/portfolio.git
git push -u origin main
```

✅ **Refresh GitHub - you should see all your files uploaded!**

---

## STEP 3: Deploy to Vercel

### 3.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. ✅ You're now logged into Vercel

### 3.2 Import Your Project

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"portfolio"** (or whatever you named it)
4. Click **"Import"** next to it

### 3.3 Configure Project Settings

Vercel should **auto-detect Astro**. Verify these settings:

- **Framework Preset:** Astro ✅ (auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install` ✅

**Don't change anything** - the defaults are correct!

### 3.4 Deploy

1. Click the big **"Deploy"** button
2. Watch the build logs (takes 2-3 minutes)
3. ✅ When you see **"Congratulations!"** - your site is deployed!

### 3.5 Test Your Preview URL

1. Click **"Visit"** or the generated URL
2. You'll get a temporary URL like: `portfolio-abc123.vercel.app`
3. **Test everything:**
   - Homepage loads ✅
   - Projects page works ✅
   - Individual project pages load ✅
   - Dark mode toggle works ✅
   - Terminal animations play ✅
   - All links work ✅

---

## STEP 4: Connect Your Custom Domain

Now let's make it live at **jakeestrada.org**!

### 4.1 Add Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click **"Settings"** tab (top menu)
3. Click **"Domains"** in the left sidebar
4. In the input box, type: `jakeestrada.org`
5. Click **"Add"**

### 4.2 Get Your DNS Configuration

Vercel will show you a screen with DNS records. You'll see something like:

```
Configure your domain's DNS records:

A Record
  Name: @
  Value: 76.76.21.21

CNAME Record
  Name: www
  Value: cname.vercel-dns.com
```

**⚠️ IMPORTANT:** Copy these exact values - they might be slightly different. Use what Vercel shows you!

---

## STEP 5: Configure DNS in Namecheap

### 5.1 Log into Namecheap

1. Go to [namecheap.com](https://namecheap.com)
2. Sign in to your account
3. Click **"Domain List"** in left sidebar
4. Find **jakeestrada.org**
5. Click **"Manage"** button

### 5.2 Navigate to DNS Settings

1. Click the **"Advanced DNS"** tab
2. You'll see a list of DNS records

### 5.3 Delete Old Records

**Remove any existing conflicting records:**

Look for and **delete**:
- Any A Records with Host "@"
- Any CNAME Records with Host "www"
- Any "Parking Page" records
- Any old redirects

**Keep these** (don't delete):
- Email-related records (MX, TXT for email)
- Any other records you're using

### 5.4 Add New DNS Records

Click **"Add New Record"** and create these two records:

**Record #1: A Record (for root domain)**
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**Record #2: CNAME Record (for www subdomain)**
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

⚠️ **Use the exact IP address and CNAME value that Vercel showed you!**

### 5.5 Save Changes

1. Click the green checkmark (✓) next to each record
2. Click **"Save All Changes"** button at the top

✅ **DNS configuration is complete!**

---

## STEP 6: Wait for DNS Propagation

### 6.1 Understanding DNS Propagation

DNS changes take time to spread across the internet:
- **Minimum:** 15-30 minutes
- **Typical:** 1-2 hours  
- **Maximum:** 24-48 hours

### 6.2 Check Propagation Status

Use [dnschecker.org](https://dnschecker.org):

1. Go to the website
2. Enter: `jakeestrada.org`
3. Select: "A" record
4. Click "Search"
5. Green checkmarks = DNS is propagated in that region

Do the same for:
- `www.jakeestrada.org` with "CNAME" record type

### 6.3 Check in Vercel

1. Go back to Vercel → Your Project → Settings → Domains
2. You should see:
   - `jakeestrada.org` - Status: **"Valid Configuration"** ✅
   - `www.jakeestrada.org` - Status: **"Valid Configuration"** ✅

**If you see warnings**, wait longer for DNS to propagate.

---

## STEP 7: Verify SSL Certificate

### 7.1 Automatic SSL

Vercel automatically provisions a **FREE SSL certificate** from Let's Encrypt:
- Happens automatically after DNS propagates
- Takes 5-10 minutes after DNS is configured
- No action needed from you

### 7.2 Check SSL Status

1. Visit: `https://jakeestrada.org`
2. Look for the **padlock icon** 🔒 in browser address bar
3. Click the padlock → Should say "Connection is secure"

✅ **SSL is active!**

---

## STEP 8: Final Verification

### 8.1 Test Your Live Site

Visit these URLs and verify everything works:

**Primary Domain:**
- `https://jakeestrada.org` ✅

**WWW Redirect:**
- `https://www.jakeestrada.org` (should redirect to non-www) ✅

**HTTP to HTTPS:**
- `http://jakeestrada.org` (should redirect to https) ✅

### 8.2 Complete Checklist

Test each feature:

- [ ] Homepage loads with terminal animations
- [ ] Projects page displays all projects
- [ ] Click individual projects - detail pages work
- [ ] Dark mode toggle switches themes
- [ ] Terminal loading animations play
- [ ] All navigation links work
- [ ] All external links work (GitHub, LinkedIn, Instagram, email)
- [ ] Images load correctly
- [ ] Site works on mobile (test on phone)
- [ ] Site works in different browsers (Chrome, Firefox, Safari)
- [ ] No console errors (press F12 → Console tab)
- [ ] SSL certificate active (https with padlock)

---

## STEP 9: Set Up Continuous Deployment

### 9.1 How It Works

**Every time you push to GitHub, Vercel automatically redeploys your site!**

No manual steps needed - it's fully automated.

### 9.2 Making Updates

To update your live site:

```bash
# 1. Make changes to your files
# Example: Add a new project, update content, etc.

# 2. Commit your changes
git add .
git commit -m "Description of what you changed"

# 3. Push to GitHub
git push origin main

# 4. Vercel automatically detects the push and redeploys!
# Check deployment status at vercel.com/dashboard
```

### 9.3 Monitor Deployments

In Vercel dashboard:
1. Go to your project
2. Click **"Deployments"** tab
3. See all deployments (latest at top)
4. Click any deployment to see build logs

---

## 🎉 YOU'RE LIVE!

Your portfolio is now accessible at:
### **https://jakeestrada.org**

---

## 📊 Optional: Add Analytics

### Vercel Analytics (Recommended - Free)

1. In Vercel dashboard, go to your project
2. Click **"Analytics"** tab
3. Click **"Enable Analytics"**
4. View real-time visitor data

**Features:**
- Real-time visitor tracking
- Page views
- Top pages
- Geographic data
- Device types

### Google Analytics (Optional)

If you want more detailed analytics:

1. Create Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. Create a GA4 property
3. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Add to your site:

**Edit: `src/layouts/BaseLayout.astro`**

Add before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

Commit and push:
```bash
git add src/layouts/BaseLayout.astro
git commit -m "Add Google Analytics"
git push origin main
```

---

## 🐛 Troubleshooting

### Domain Not Working

**Problem:** jakeestrada.org shows error or doesn't load

**Solutions:**
1. **Check DNS propagation:** Use [dnschecker.org](https://dnschecker.org)
2. **Verify DNS records in Namecheap:**
   - A Record: `@` → `76.76.21.21`
   - CNAME Record: `www` → `cname.vercel-dns.com`
3. **Check Vercel status:** Settings → Domains → Should show "Valid Configuration"
4. **Wait longer:** DNS can take up to 48 hours
5. **Clear your browser cache:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### SSL Certificate Not Working

**Problem:** "Not Secure" warning or no padlock

**Solutions:**
1. **Wait 10-15 minutes** after DNS propagates - SSL takes a bit longer
2. **Force refresh:** Hard refresh your browser
3. **Check in Vercel:** Domains tab should show SSL status
4. **If still not working after 1 hour:**
   - Remove domain in Vercel
   - Wait 5 minutes
   - Re-add domain

### Build Fails

**Problem:** Deployment fails in Vercel

**Solutions:**
1. **Check build logs:**
   - Vercel → Deployments → Click failed deployment → View logs
2. **Test locally first:**
   ```bash
   npm run build
   ```
   If it fails locally, fix errors before pushing
3. **Common issues:**
   - Missing dependencies: Run `npm install`
   - TypeScript errors: Check the logs for specific files
   - Image paths: Ensure images exist in `public/images/`

### Images Not Loading

**Problem:** Images show broken or don't load

**Solutions:**
1. **Check file paths:**
   - Images should be in `public/images/`
   - Reference them as `/images/filename.svg` (with leading slash)
2. **Check file names:**
   - Must match exactly (case-sensitive)
   - No spaces in filenames
3. **Verify files committed to Git:**
   ```bash
   git status
   # Make sure images are tracked
   git add public/images/
   git commit -m "Add images"
   git push origin main
   ```

### Site Looks Different Than Local

**Problem:** Live site doesn't match what you see locally

**Solutions:**
1. **Clear cache:** Ctrl+Shift+R or Cmd+Shift+R
2. **Check for console errors:** F12 → Console
3. **Verify build:**
   ```bash
   npm run build
   npm run preview
   # Should match what you see on Vercel
   ```
4. **Check Vercel environment:** Settings → Environment Variables

---

## 📧 Getting Help

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Astro Support
- Documentation: [docs.astro.build](https://docs.astro.build)
- Discord: [astro.build/chat](https://astro.build/chat)

### DNS/Domain Help
- Namecheap Support: [namecheap.com/support](https://www.namecheap.com/support/)
- DNS Checker: [dnschecker.org](https://dnschecker.org)

---

## ✅ Post-Deployment Checklist

Copy this checklist and verify each item:

**Deployment:**
- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Preview URL works (portfolio-xyz.vercel.app)
- [ ] Build completed successfully

**Domain Configuration:**
- [ ] jakeestrada.org added in Vercel
- [ ] DNS A record added in Namecheap
- [ ] DNS CNAME record added in Namecheap
- [ ] DNS propagated (checked with dnschecker.org)
- [ ] Domain shows "Valid Configuration" in Vercel

**SSL & Security:**
- [ ] SSL certificate issued (padlock shows in browser)
- [ ] HTTPS works for jakeestrada.org
- [ ] HTTPS works for www.jakeestrada.org
- [ ] HTTP redirects to HTTPS
- [ ] WWW redirects to non-WWW

**Functionality:**
- [ ] All pages load correctly
- [ ] Terminal animations work
- [ ] Dark mode toggle functions
- [ ] All project pages accessible
- [ ] All external links work
- [ ] Images display properly
- [ ] Mobile responsive (tested on phone)
- [ ] Works in Chrome, Firefox, Safari
- [ ] No console errors

**Optional:**
- [ ] Analytics enabled (Vercel or Google)
- [ ] Shared portfolio link with friends/network
- [ ] Added to resume/LinkedIn
- [ ] Tested on multiple devices

---

## 🎯 Quick Reference

### Your URLs
- **Live Site:** https://jakeestrada.org
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/YOUR-USERNAME/portfolio

### Important Commands
```bash
# Local development
npm run dev

# Build and test
npm run build
npm run preview

# Deploy updates
git add .
git commit -m "Your update description"
git push origin main
```

### DNS Records (Namecheap)
```
A Record:    @ → 76.76.21.21
CNAME:       www → cname.vercel-dns.com
```

---

## 🚀 Success!

**Congratulations!** Your terminal-styled portfolio is now live at **https://jakeestrada.org**

Share it with:
- Recruiters and hiring managers
- Your professional network on LinkedIn
- Friends and colleagues
- Include on your resume

**Pro tip:** Update your LinkedIn, GitHub, and other profiles to include your new portfolio URL!

---

## 💡 What's Next?

1. **Monitor traffic:** Check Vercel Analytics regularly
2. **Keep it updated:** Add new projects as you complete them
3. **Share widely:** Include in job applications
4. **Get feedback:** Ask friends to review and test
5. **SEO:** Submit to Google Search Console
6. **Social proof:** Share on LinkedIn when you deploy

---

**Your portfolio is live! Time to showcase your work to the world! 🎉**
