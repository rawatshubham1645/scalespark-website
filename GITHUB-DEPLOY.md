# Deploy via GitHub + Netlify

Follow these steps to put your site on GitHub and deploy it with Netlify.

---

## Part 1: Push your project to GitHub

### 1. Create a new repository on GitHub

1. Go to [github.com](https://github.com) and log in.
2. Click the **+** (top right) → **New repository**.
3. Fill in:
   - **Repository name:** e.g. `scalespark-website` (or any name you like).
   - **Description:** optional (e.g. "ScaleSpark Marketing Agency website").
   - **Public**.
   - **Do not** check "Add a README", "Add .gitignore", or "Choose a license" (you already have files).
4. Click **Create repository**.

### 2. Push your project from your computer

Open **Terminal** and run these commands **one by one**. Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and the repo name you chose (e.g. `scalespark-website`).

```bash
# Go to your project folder
cd "/Users/shubhamrawat/Desktop/Corbet/Jim Corbet"

# Initialize Git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: ScaleSpark website"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repo as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Example** if your username is `johndoe` and repo is `scalespark-website`:
```bash
git remote add origin https://github.com/johndoe/scalespark-website.git
git push -u origin main
```

When you run `git push`, GitHub may ask you to log in (browser or token). Do that, then the push will complete.

---

## Part 2: Connect GitHub to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Click **Add new site** → **Import an existing project**.
3. Click **Deploy with GitHub** (or **Connect to Git provider** → **GitHub**).
4. Authorize Netlify to access GitHub if asked.
5. **Choose the repository** you just pushed (e.g. `scalespark-website`).
6. **Build settings:**
   - **Branch to deploy:** `main`
   - **Build command:** leave **empty**
   - **Publish directory:** type **`.`** (a single dot = site root)
7. Click **Deploy site**.

Netlify will build and deploy. In a minute you’ll get a live URL like `https://random-name-123.netlify.app`.

---

## Part 3: Later updates

When you change the site and want to update the live site:

```bash
cd "/Users/shubhamrawat/Desktop/Corbet/Jim Corbet"
git add .
git commit -m "Update: describe what you changed"
git push
```

Netlify will automatically deploy the new version (if you left “Auto publish” on for the `main` branch).

---

## Optional: Change Netlify site name

- In Netlify: **Site settings** → **General** → **Site name**.
- Change to e.g. `scalespark` so your URL is `https://scalespark.netlify.app`.

## Optional: Custom domain

- **Site settings** → **Domain management** → **Add custom domain** to use e.g. `scalespark.com`.
