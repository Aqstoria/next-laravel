# Cartzilla React

The React/Next.js version of Cartzilla Bootstrap template

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build icon font

Icon font is build out of svg files. To build an icon font you need to run command:

```shell
npm run build-icon-font
```

The command above should generate two files with extensions `.css` and `.woff2`.

The target directory is configurable. Check `./utils/config.mjs` file. You can find here the `icons` section where you can configure:

- `src` - path to the source directory. By default, you can find the source files in `./src/icons/svg`
- `output` - path to the target directory. By default, it is `./src/icons/font`
- `fontName` - is responsible for naming the output file and the name of the `font-family` property. By default is `cartzillaIcons`
- `cssPrefix` - configure the icon className prefix. By default is `ci`. For example, `ci-heart`.

## RTL support

Enabling RTL support in the Cartzilla template is straightforward and can be done through the environment variables. Follow these steps:

- Locate the root directory of your Cartzilla project
- Create and modify the `.env` file:

```shell
echo NEXT_PUBLIC_ENABLE_RTL=true >> .env
npm run dev
```

- Restart your development server:

```shell
npm run dev
```
