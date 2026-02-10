# web-invoice

A simple invoice generator built with Vue + Vite. Designed to run locally so your invoice data stays on your machine (no remote backend).

Most values are currently configured via environment variables (see `./.env.example`). More flexibility is planned, but not a priority right now.

## Requirements

- Node.js (recommended: latest LTS)
- npm (or pnpm/yarn if you prefer)

## Setup

Install dependencies:

```sh
npm install
````

Create your local env file:

```sh
cp .env.example .env
```

Edit `.env` to match your provider/client details.

## Development

Run the dev server:

```sh
npm run dev
```

## Production

Type-check, build and minify:

```sh
npm run build
```

(Optional) Preview the production build locally:

```sh
npm run preview
```

## Lint

```sh
npm run lint
```

## Notes

* Only variables prefixed with `VITE_` are exposed to the app.
* `.env` may contain personal data — don’t commit it. Consider adding `.env` to `.gitignore` if it isn’t already.
