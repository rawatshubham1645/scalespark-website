# Deploy ScaleSpark to Netlify

Your site is static (HTML, CSS, JS, images). Here’s how to put it on Netlify.

---

## What you need

1. **Netlify account** – sign up at [netlify.com](https://www.netlify.com) (free).
2. **This folder** – the one that contains `index.html`, `css/`, `js/`, and `logo 1.png` (your “Jim Corbet” project folder).

---

## Option 1: Drag and drop (easiest)

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. On the main dashboard, find the **“Drag and drop your site output folder here”** (or “Add new site” → “Deploy manually”).
3. **Important:** Deploy the **folder that contains** `index.html` (your project root).  
   - On Mac: open the “Jim Corbet” folder in Finder so you see `index.html`, `css`, `js`, and `logo 1.png`.  
   - Drag that **entire folder** into the Netlify drop zone (or select all files inside and drag).
4. Wait for the deploy to finish. Netlify will give you a random URL like `https://random-name-123.netlify.app`.
5. (Optional) In **Site settings** → **Domain management** you can add a custom domain or change the site name.

---

## Option 2: Deploy with Netlify CLI

1. **Install Node.js** if you don’t have it: [nodejs.org](https://nodejs.org).
2. **Install Netlify CLI** in a terminal:
   ```bash
   npm install -g netlify-cli
   ```
3. **Log in to Netlify:**
   ```bash
   netlify login
   ```
   (A browser window will open to authorize.)
4. **Go to your project folder** (the one with `index.html`):
   ```bash
   cd "/Users/shubhamrawat/Desktop/Corbet/Jim Corbet"
   ```
5. **Deploy:**
   ```bash
   netlify deploy
   ```
   - When asked “Publish directory?”, press **Enter** (current folder `.`).
   - First time you’ll be asked to create a new site; say **Yes**.
6. For a **production** URL (live site):
   ```bash
   netlify deploy --prod
   ```

---

## Option 3: Deploy from Git (GitHub / GitLab / Bitbucket)

1. Put this project in a Git repo and push to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site** → **Import an existing project**.
3. Choose your Git provider and select the repository.
4. **Build settings:**
   - **Branch to deploy:** `main` (or your default branch).
   - **Build command:** leave **empty** (no build step).
   - **Publish directory:** `.` (root of the repo, where `index.html` is).
5. Click **Deploy site**. Netlify will deploy and will auto-deploy on every push to that branch.

---

## After deploy

- **HTTPS:** Netlify serves your site over HTTPS by default.
- **Custom domain:** In **Site settings** → **Domain management** → **Add custom domain** you can use your own domain (e.g. `scalespark.com`).
- **Renaming:** In **Site settings** → **General** → **Site name** you can change the default `*.netlify.app` name.

---

## If something doesn’t work

- **Blank or broken page:** Make sure you deployed the **folder that contains** `index.html`, not a parent folder. The root of the deployed site must have `index.html`.
- **CSS/JS not loading:** Your paths are relative (`css/styles.css`, `js/main.js`). They work as long as the deploy root is the folder that contains `index.html`, `css/`, and `js/`.
- **Logo not showing:** Ensure `logo 1.png` is in the same folder as `index.html` (or update the `src` in `index.html` if you move it).

That’s all you need to deploy this project on Netlify.
