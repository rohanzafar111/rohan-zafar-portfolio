# Rohan Zafar Portfolio

React + Vite + Tailwind CSS + Framer Motion portfolio, configured for free GitHub Pages deployment.

## Run locally
```bash
npm install
npm run dev
```

## Build locally
```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages (free)
1. Create a new **public** GitHub repository, for example `rohan-zafar-portfolio`.
2. Upload the **contents** of this project folder to the repository root (so `package.json`, `src/`, `public/`, and `.github/` are at the top level).
3. Commit the files to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.
7. Your website link will appear under **Settings → Pages → Visit site**. It will look like:
   `https://YOUR-USERNAME.github.io/rohan-zafar-portfolio/`

This project uses HashRouter, so internal pages work on GitHub Pages without server rewrite rules. The CV and profile image use relative base paths.

## Update later
Edit files, commit, and push to `main`. GitHub Actions will automatically rebuild and redeploy the site.

## CV and photo
- CV: `public/Rohan_Zafar_CV.pdf`
- Profile photo: `public/images/rohan.png`

## Contact form
The current form uses a mailto fallback; no backend is configured.
