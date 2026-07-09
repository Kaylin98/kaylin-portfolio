# Kaylin Maharaj — Portfolio

Personal portfolio site built with Angular and Tailwind CSS, showcasing full-stack
software engineering work (.NET / C# / Angular) alongside game development
projects built in Unity.

**Live site:** [kaylin-maharaj.co.za](https://kaylin-maharaj.co.za)

## Tech Stack

- **Framework:** Angular (standalone components, signals, new `@if`/`@for` control flow)
- **Styling:** Tailwind CSS v4
- **Icons:** [@lucide/angular](https://lucide.dev), with custom stroke-style components for brand icons (GitHub, LinkedIn) that Lucide no longer ships
- **Forms:** Angular template-driven forms (`ngModel`), submitted via [Formspree](https://formspree.io)
- **Hosting:** Cloudflare Workers (static assets), deployed via Wrangler
- **CI/CD:** Automatic build & deploy on every push to `main`, via Cloudflare Workers Builds

## Features

- Fully componentized sections: Header, Hero, About, Skills, Projects, Experience, Contact, Footer
- Custom Tailwind-based UI primitives (Button, Card, Badge, Input, Textarea, Label) implemented as lightweight Angular directives rather than a full component library
- Dark theme with a custom lime/near-black color palette
- Custom animated cursor (desktop only — automatically disabled on touch devices)
- Centralized site configuration (`site-config.ts`) for contact info and social links — designed to be swapped for a real backend API later with no changes needed in consuming components
- Contact form with inline validation and real email delivery via Formspree
- Responsive layout, from mobile through desktop

## Project Structure

```
src/app/
├── ui/                     # Shared UI primitives (button, card, badge, form controls, brand icons, cursor dot)
├── components/
│   ├── header/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   ├── contact/
│   ├── footer/
│   └── image-with-fallback/
├── site-config.ts          # Centralized contact/social info (Injectable service)
├── app.component.ts
└── app.component.html
```

## Getting Started

### Prerequisites
- Node.js `v22.22.3`, `v24.15.0`, or later
- npm

### Installation

```bash
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Build

```bash
npx ng build --output-path dist/cloudflare
```

Output is written to `dist/cloudflare/browser`.

## Deployment

This project deploys to **Cloudflare Workers** (static assets) via Wrangler, configured in `wrangler.jsonc`. Every push to `main` automatically triggers a new build and deployment through Cloudflare's Git integration — no manual deploy steps or separate CI file required.

To deploy manually:

```bash
npx wrangler deploy
```

## Contact Form

The contact form submits to a [Formspree](https://formspree.io) endpoint. Update `FORMSPREE_ENDPOINT` in `src/app/components/contact/contact.component.ts` if the form is ever moved to a new Formspree project.

## License

Personal project — all rights reserved.

## Author

**Kaylin Maharaj**
Full Stack Software Engineer | Randburg, South Africa
[GitHub](https://github.com/Kaylin98)
