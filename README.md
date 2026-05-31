<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally and deploy it to GitHub Pages.

View your app in AI Studio: https://ai.studio/apps/7b8cc0d0-b830-4e30-94a4-5fd728845c14

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set the Gemini API Key:**
   Create a `.env` or `.env.local` file (using `.env.example` as a template) and add your `GEMINI_API_KEY`:
   ```env
   VITE_GEMINI_API_KEY="your-gemini-api-key"
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## Deploy to GitHub Pages (Automated Deployment)

The project has been fully configured for automated deployment using **GitHub Actions**. Follow the steps below to initialize Git, create your GitHub repository, and deploy your site:

### 1. Initialize Git Locally
Since this is not yet a Git repository, open your terminal in this project folder and run:
```bash
git init
git add .
git commit -m "feat: configure project for GitHub Pages deployment"
```

### 2. Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and create a new repository.
2. Leave the repository empty (do **NOT** initialize it with a README, `.gitignore`, or license, as we already have them).
3. Copy the repository URL (e.g., `https://github.com/your-username/your-repo-name.git`).

### 3. Connect Local Repo and Push
Connect your local repository to GitHub and push your code:
```bash
# Rename default branch to main
git branch -M main

# Add the remote GitHub repository link
git remote add origin https://github.com/your-username/your-repo-name.git

# Push the code to the main branch
git push -u origin main
```

### 4. Enable GitHub Pages Deployment
Once your code is pushed:
1. Go to your repository page on GitHub.
2. Click on **Settings** (gear icon at the top menu).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu instead of "Deploy from a branch".
5. That's it! GitHub Actions will immediately kick off a build and deploy your site. You can monitor the progress under the **Actions** tab of your repository.
