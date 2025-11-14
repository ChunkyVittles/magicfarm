# Quick Deployment Guide - Magic Farm Taos Shop

## 🚀 Fastest Path to Live Site (5-10 minutes)

### Step 1: Deploy to Vercel

1. **Go to vercel.com** and sign up (free for personal projects)
2. **Click "Add New Project"**
3. **Choose "Import Git Repository"** (or upload folder directly)
4. **Vercel auto-detects Next.js** - just click "Deploy"
5. **Done!** Your site is live at `your-project.vercel.app`

### Step 2: Connect Your Domain

In your Vercel project dashboard:

1. **Settings → Domains**
2. **Add domain**: `shop.magicfarmtaos.com` (or `www.magicfarmtaos.com`)
3. **Vercel shows you DNS records to add**

In Namecheap:

1. **Domain List → Manage → Advanced DNS**
2. **Add New Record**:
   \`\`\`
   Type: CNAME
   Host: shop (or www)
   Value: cname.vercel-dns.com
   TTL: Automatic
   \`\`\`
3. **Save and wait 5-30 minutes** for DNS propagation

### Step 3: Customize

Before deploying, update these files:

**app/payment/page.tsx** (Line 21):
\`\`\`typescript
const venmoUsername = '@YourActualVenmoUsername';
\`\`\`

**app/payment/page.tsx** (Line 82):
\`\`\`typescript
<a href="mailto:youremail@magicfarmtaos.com"
\`\`\`

**app/order-confirmation/page.tsx** (Line 39):
\`\`\`typescript
<a href="mailto:youremail@magicfarmtaos.com"
\`\`\`

### Step 4: Add Products

Edit **data/products.ts** to add/modify your actual products.

Add product images to **public/products/** folder.

---

## 💡 First Time Using This?

### To Run Locally:

\`\`\`bash
cd magic-farm-shop
npm install
npm run dev
\`\`\`

Visit http://localhost:3000

### To Make Changes:

1. Edit files in the project
2. Save - changes appear immediately in browser
3. When ready, push to Git and Vercel auto-deploys

---

## 📋 Pre-Launch Checklist

- [ ] Update Venmo username in payment page
- [ ] Update email addresses in payment and confirmation pages
- [ ] Add real product data in data/products.ts
- [ ] Add product images to public/products/
- [ ] Test complete checkout flow
- [ ] Test Venmo payment on mobile device
- [ ] Set up order notification system (email/Slack/etc.)
- [ ] Configure domain DNS in Namecheap
- [ ] Test site on mobile and desktop

---

## 🆘 Need Help?

**Site not loading?**
- Check Vercel deployment logs
- Verify all files uploaded correctly

**Domain not working?**
- DNS can take up to 24 hours (usually 10-30 mins)
- Double-check CNAME records in Namecheap
- Try clearing browser cache

**Venmo not opening?**
- Test on actual mobile device
- Ensure Venmo app is installed
- Users can also pay manually through Venmo app

**Orders not tracking?**
- Currently orders are client-side only
- See README.md for backend integration steps
- Consider setting up a simple webhook or email notification

---

## 🔮 Next Steps (After Launch)

1. **Set up email notifications** when orders are placed
2. **Create admin dashboard** to manage products
3. **Add backend database** for order persistence
4. **Integrate Venmo Business API** for payment verification
5. **Add product inventory tracking**
6. **Set up analytics** (Google Analytics, Vercel Analytics)

See full README.md for detailed instructions on these enhancements.

---

**That's it! You're ready to go live. 🌿**

Simple. Sacred. Pure.
