# Uuriv õppija

Made with React + TS + Vite

## Translations
Translations are located in the `public/i18n` directory in JSON format.

Estonian `et` is the default language.

If no translation is assigned to a key, then `et` is used as fallback.

## Development
Requires **node 16+** installed

Install dependencies:
```bash
npm i
```

Start the application
```bash
npm run dev
```

## Deployment

Install dependencies

Then build for production
```bash
npm run build
```

**NB** - *Depending on your web server, make sure that all routes lead to index.html*

### Deploying to server as subdirectory

For example, if you want to serve the app in `https://web.htk.tlu.ee/opistrateegiad/`:

Change the `BASE_URL` value in `config.ts` to be like this:

```ts
export const BASE_URL: string = '/opistrateegiad'
```
then build again.

**NB** - *Depending on your web server, make sure that all subdirectory routes lead to index.html, eg **'/opistrateegiad/\*\*' -> index.html***

