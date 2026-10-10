# Suraj Lanke — Portfolio

Personal portfolio built with **React + Vite**, **Tailwind CSS** and **Framer Motion**.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Edit your content

Everything you'd want to change is in **`src/data/portfolio.js`**: name, hero roles, about text,
stats, skills, projects, education and certifications. Save the file and the page updates instantly.

- Photo: replace `src/suraj.webp` (a transparent PNG/WebP cut-out works best).
- Resume: replace `public/Suraj_Lanke_Resume.pdf`.
- Phone number: uncomment the `phone` line in `portfolio.js` if you want it shown.
- Colors and fonts: `tailwind.config.js`.

## Project structure

```
src/
  data/portfolio.js      ← all content
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx  Journey.jsx  Contact.jsx  Footer.jsx
    ui.jsx               ← shared bits (reveal animation, section heading, icons)
  App.jsx  main.jsx  index.css
public/Suraj_Lanke_Resume.pdf
```

## Deploy (free)

**Vercel:** push this folder to a GitHub repo → vercel.com → "Add New Project" → import the repo → Deploy.
Vite is detected automatically.

**Netlify:** build command `npm run build`, publish directory `dist`.

## Notes

- The contact form opens the visitor's email app with the message pre-filled (no backend needed).
  To receive messages directly, plug in a service like Formspree or EmailJS in `Contact.jsx`.
- `npm run build:single` makes a one-file HTML version in `dist-single/` (handy for quick sharing).
