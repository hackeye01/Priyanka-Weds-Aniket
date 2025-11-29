# Wedding Gift – Interactive Wedding Invitation

An interactive, story-style wedding invitation built with React Router, TypeScript, and Tailwind CSS.

This project turns a traditional wedding invite into a small web experience, with a hero home page, animated loading screen, countdown to the wedding day, and a letter page styled like an opening envelope and handwritten note.

---

## Features

- **Beautiful loading screen** with animated florals, heart illustration, and a timed progress bar
- **Home page** with couple photo, names, wedding date, and a live **countdown**
- **Letter page** (`/letter`) presented as an envelope that opens to reveal a Marathi letter and a sibling photo
- **Smooth page transitions** using Framer Motion
- **Responsive layout** optimized for desktop and mobile
- **TypeScript + Tailwind CSS** for a modern, strongly-typed and utility-first workflow

---

## Tech Stack

- **Framework**: React + React Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: Framer Motion
- **Build tooling**: Vite-based React Router template

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

Main routes:

- `/` – Home page with hero section and countdown
- `/letter` – Envelope + letter experience

---

## Build for Production

Create an optimized production build:

```bash
npm run build
```

This generates the production assets in the build output configured by the React Router template (typically a `build` directory).

To preview the production build locally (if a preview script exists in `package.json`):

```bash
npm run preview
```

---

## Deployment

This app can be deployed to any static/Node hosting platform. Common simple options:

- **Vercel** – import the GitHub repo, set `npm run build` as the build command
- **Netlify** – connect the repo, use `npm run build` as the build command and the appropriate publish directory (often `build`)

General steps:

1. Push the project to GitHub.
2. Connect your GitHub repository in Vercel or Netlify.
3. Set **Build command** to:

   ```bash
   npm run build
   ```

4. Set the **output/publish directory** according to the React Router template’s build output.
5. Deploy and use the generated URL as your shareable wedding invitation link.

---

## Project Structure (high level)

Some key files/folders:

- `app/root.tsx` – Root layout, global navigation, and initial loading screen
- `app/routes/home.tsx` – Main landing page with couple intro and countdown
- `app/routes/letter.tsx` – Envelope + letter interaction page
- `app/components/LoadingScreen.tsx` – Animated wedding-themed loading screen
- `app/components/Countdown.tsx` – Countdown timer to the wedding date

---

## License

This project is a personal wedding invitation; feel free to reference the code and adapt ideas for your own invites.
# priyanka-weds-aniket
# Priyanka-Weds-Aniket
