# My Preferred Next.js Starter Template

Includes popular integrations with:

- Prettier
- Eslint (lots of rules, most set as warnings)
- Stylelint (default rules with some quality of life fixes I like)
- Storybook (for UX testing)
- Typescript (Because what is true?)

## Storybook

- Includes a light and dark mode theme in `preview.tsx`
- Enables device level viewports in `preview.tsx`
- Searches for any `**/*.stories.tsx` files stored alongside your components in `src/components`
- Utilizes POSTCSS setup in `postcss.config.js`

## Next.js

- Optimized for deployment on Vercel
- Secondary build options available for Vercel to output a static storybook interactive UI tester
- Includes default `hello.tsx` api endpoint for Vercel

## Tailwind / Design

- Includes a few basic typography components
- Includes `tailwind.config.js` with Pure Gray in place of default Tailwind "bluish gray"
- Includes a few uneccessary but easy-to-start with global rules in `src/styes/globals.scss`
- Includes a tailwind config viewer by running `yarn tailwind-config-viewer`

## Typescript

- Types most starter elements, including Next's app props in `_app.tsx`
- Includes very strict ESLINT config that you can disable as you go.
- Uses the newer `JIT` or `Just In Time` mode by Tailwind

## Optimizations

### Font Loading

- Pre loads and pre-fetches locally stored Woff2 useful for hosting on Vercel environments
- Currently uses `Inter` as the main font stored in `.public/Fonts/Inter.woff2`
- Uses `app.scss` to pre-load Inter in main build, and `preview-head.html` to load Inter in Storybook

### .gitignore

- Ignores `next build`
- Ignores `node modules`
- Ignores `storybook-static`

### Sitemap

- Autogenerates a `sitemap.xml` for your pages directory (on build)
- Autogenerates a `robots.txt` file for scrapers (on build)

### Editor Config

- Optimized for `VSCode` in `.vscode/settings.json`
- Includes format and fix code on save
- Uses `Yarn` as default package manager
- Removes some obnoxious Markdown rules that are default

