# Venthan Francis Portfolio

A professional static Angular portfolio website for Venthan Francis, positioned primarily as a Full-Stack Developer for roles such as Full-Stack Developer, Junior Software Developer, Associate Software Engineer, Software Engineer I, Java Developer, and Backend Developer.

This project is intentionally static. It does not include a Spring Boot backend, database, login, admin dashboard, JWT authentication, customer accounts, or server-side portfolio features.

## Features

- Angular, TypeScript, HTML, CSS, and Bootstrap
- Static GitHub Pages deployment with `/venthan-francis-portfolio/` base URL
- Hash-based routing for reliable project detail refreshes on GitHub Pages
- Sticky responsive navigation with active-section highlighting
- Light and dark mode
- Recruiter-focused hero, about, skills, experience, projects, education, certifications, resume, contact, and footer sections
- Reusable project cards and project detail pages
- Typed portfolio data models
- Static-friendly mailto contact form with validation, loading state, success message, and error message
- SEO metadata, Open Graph metadata, robots.txt, sitemap.xml, structured data, and canonical URL placeholder
- Accessible labels, focus states, semantic layout, reduced-motion support, and responsive design
- GitHub Actions workflow for automatic deployment from the `main` branch

## Technology Stack

- Angular
- TypeScript
- Bootstrap
- Bootstrap Icons
- HTML
- CSS
- GitHub Actions
- GitHub Pages

## Project Structure

```text
src/
  app/
    components/
      about/
      certifications/
      contact/
      education/
      experience/
      footer/
      header/
      hero/
      project-card/
      projects/
      skills/
    data/
      portfolio.data.ts
    models/
      portfolio.models.ts
    pages/
      home-page/
      not-found-page/
      project-details/
    services/
      contact.service.ts
      portfolio-data.service.ts
      theme.service.ts
public/
  assets/
    images/
    resume/
  robots.txt
  sitemap.xml
.github/
  workflows/
    deploy-github-pages.yml
scripts/
  create-gh-pages-404.mjs
```

## Install Requirements

Install these first:

- Node.js 24 or compatible current Node version
- npm
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

## Install Dependencies

```bash
npm install
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
```

## Run Locally

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

## Build for Production

For a normal Angular production build:

```bash
npm run build
```

For GitHub Pages with the repository name `portfolio`:

```bash
npm run build:github
```

This builds with:

```text
/venthan-francis-portfolio/
```

as the base URL.

The output folder is:

```text
dist/portfolio/browser
```

The `postbuild:github` script copies `index.html` to `404.html`. This helps GitHub Pages serve the Angular app if someone refreshes a route. The app also uses hash-based routing, so project detail URLs look like:

```text
https://vs-studio-hub.github.io/venthan-francis-portfolio/#/projects/mjav-rubber-band-b2b-wholesale-platform
```

## Replace the Resume

Replace this file:

```text
public/assets/resume/venthan-francis-resume.pdf
```

Keep the same filename if you do not want to update code.

If you rename the resume file, update:

```text
src/app/data/portfolio.data.ts
```

Look for:

```ts
export const resumePath = 'assets/resume/venthan-francis-resume.pdf';
```

## Update Personal Information

Most portfolio content is stored in:

```text
src/app/data/portfolio.data.ts
```

Update:

- Social links
- Email address
- Resume path
- Skills
- Experience
- Projects
- Education
- Certifications

Also update placeholder SEO URLs in:

```text
src/index.html
public/robots.txt
public/sitemap.xml
```

Replace:

```text
https://vs-studio-hub.github.io/venthan-francis-portfolio/
```

with your real GitHub Pages URL.

## Add a New Project

Open:

```text
src/app/data/portfolio.data.ts
```

Add a new object to the `projects` array.

Required fields include:

- `slug`
- `name`
- `category`
- `status`
- `featured`
- `overview`
- `problemSolved`
- `role`
- `features`
- `technologies`
- `githubUrl`
- `liveDemoUrl`
- `screenshot`
- `screenshotAlt`
- `details`

Use a unique slug, for example:

```ts
slug: 'inventory-management-system'
```

The project detail page will be available at:

```text
/#/projects/inventory-management-system
```

## Add a New Skill

Open:

```text
src/app/data/portfolio.data.ts
```

Find `skillCategories` and add the skill to the correct category.

Do not add percentages, progress bars, or star ratings unless you have verified information.

## Add a Certification

Open:

```text
src/app/data/portfolio.data.ts
```

Find `certifications` and add:

```ts
{
  name: 'Certificate Name',
  issuer: 'Issuing Organization',
  completionDate: 'Month Year',
  credentialUrl: 'https://credential-link'
}
```

Use placeholders until you have verified details.

## Update Social Links

Open:

```text
src/app/data/portfolio.data.ts
```

Update the `socialLinks` array.

Also update the email address in:

```text
src/app/services/contact.service.ts
```

Replace:

```text
venthanf@gmail.com
```

with your real email address.

## Configure the Contact Form

The current contact form uses `mailto:`. This is the safest and simplest static option because it does not require a backend, API key, password, or secret token.

How it works:

1. A visitor fills out the form.
2. Angular validates the fields.
3. The website opens the visitor's email app with the message prepared.
4. The visitor sends the email.

If you later want a hosted form service, use a static-friendly provider such as Formspree, EmailJS, or Web3Forms. Do not commit private API keys, passwords, or secret tokens.

## Replace Images

Project image placeholders are stored in:

```text
public/assets/images
```

Your profile photo is:

```text
public/assets/images/venthan-francis-profile.png
```

For your real photo, use a clear professional headshot. You can replace the placeholder with a `.jpg`, `.png`, or `.webp` file. If you keep the same filename, no code changes are needed. If you rename it, update this value in `src/app/data/portfolio.data.ts`:

```ts
export const profilePhotoPath = 'assets/images/venthan-francis-profile.png?v=2';
```

You can replace these with real screenshots later:

- `project-b2b.svg`
- `project-mjav.svg`
- `project-wedding.svg`
- `project-game.svg`
- `og-preview.svg`

If you change filenames, update `src/app/data/portfolio.data.ts` and `src/index.html`.

## Create the GitHub Repository

1. Go to GitHub.
2. Create a new repository named:

```text
portfolio
```

3. Keep it public if you want to use standard GitHub Pages visibility.
4. Do not add another README from GitHub if your local project already has this README.

## Push the Project to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Build Angular portfolio for GitHub Pages"
git branch -M main
git remote add origin https://github.com/VS-Studio-Hub/venthan-francis-portfolio.git
git push -u origin main
```

Replace `VS-Studio-Hub` only if you deploy from a different GitHub account.

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Save the setting.

The workflow file is:

```text
.github/workflows/deploy-github-pages.yml
```

It runs automatically whenever you push to the `main` branch.

## Run the Deployment Workflow

The deployment starts automatically after:

```bash
git push
```

You can also run it manually:

1. Go to the GitHub repository.
2. Open the **Actions** tab.
3. Select **Deploy Angular Portfolio to GitHub Pages**.
4. Click **Run workflow**.

## Update and Redeploy

1. Edit your portfolio locally.
2. Test locally with:

```bash
npm start
```

3. Build for GitHub Pages:

```bash
npm run build:github
```

4. Commit and push:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will rebuild and redeploy the website.

## Custom Domain Later

To use a custom domain later:

1. Buy or configure your domain with a DNS provider.
2. In GitHub, go to **Settings > Pages**.
3. Add your custom domain.
4. Follow GitHub's DNS instructions.
5. Enable **Enforce HTTPS** after DNS is verified.
6. Update canonical, Open Graph, sitemap, and robots URLs in:

```text
src/index.html
public/robots.txt
public/sitemap.xml
```

## Static Deployment Notes

This site can also be deployed to:

- Vercel
- Netlify
- AWS S3 and CloudFront

For Vercel or Netlify, use:

```bash
npm run build
```

For GitHub Pages, use:

```bash
npm run build:github
```

For AWS S3 and CloudFront:

1. Build the site.
2. Upload the files from `dist/portfolio/browser`.
3. Configure S3 static website hosting or serve through CloudFront.
4. Use HTTPS through CloudFront.
5. Configure error fallback to `index.html` if you do not rely only on hash routes.

## Troubleshooting

If styles or images do not load on GitHub Pages:

- Confirm the repository is named `portfolio`.
- Confirm the build command is `npm run build:github`.
- Confirm `base href` in the built `index.html` is `/venthan-francis-portfolio/`.
- Use asset paths like `assets/images/example.svg`, not `/assets/images/example.svg`.

If refreshing a project detail page fails:

- Use hash routes such as `/#/projects/project-slug`.
- Confirm `dist/portfolio/browser/404.html` exists after the build.

If the contact form does not send automatically:

- That is expected for `mailto:` forms.
- The visitor's email app must open, and the visitor must click send.
- Use Formspree, EmailJS, or Web3Forms later if you want direct form submission.

If PowerShell blocks commands:

```bash
npm.cmd install
npm.cmd start
npm.cmd run build:github
```

## Security Notes

Do not commit:

- Private API keys
- Email passwords
- Secret tokens
- `.env` files with real secrets
- Private credentials

This project does not require secrets for the current static portfolio setup.
