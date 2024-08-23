# Turborepo Monorepo (Tanstack/Hono/SST/Drizzle)

## Goals

- Simplicity over complexity
- Modularity
- Taking a bet on the best "rising" libraries offering the best developer experience

## Using this example

Add Environment Variables:
Copy the `.env.example` file to `.env` and add your environment variables.

```sh
CLOUDFLARE_ACCOUNT_ID=<your-cloudflare-account-id>
```

Add new packages to the repo with Turborepo:

```sh
bun turbo gen workspace
# alternatively: `bun turbo gen workspace --type <app/package>` to specify the type of package to create
```

Update dependencies across the monorepo:

```sh
bunx taze -I -r
# or
bunx taze --interactive --recursive
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

| Index No.  | Workspace/Folder  | Info.                                                                               | Name                    | Navigate       | Port                                |
| ---------- | ----------------- | ----------------------------------------------------------------------------------- | ----------------------- | -------------- | ----------------------------------- |
| apps /     |                   |                                                                                     |                         |                |                                     |
| 1          | api               | A [Hono](https://hono.dev/) server compatible with Cloudflare Workers               | @repo/api               | bun api        | 5001 (wrangler) / deployed with SST |
| 2          | blog              | A [Remix](https://remix.run/) blog for content management                           | @repo/blog              | bun blog       | -                                   |
| packages / |                   |                                                                                     |                         |                |                                     |
| 1          | ui                | A dummy React UI library (which contains `<CounterButton>` and `<Link>` components) | @repo/ui                | bun ui         | -                                   |
| 2          | jest-presets      | Jest configurations for testing JavaScript applications                             | @repo/jest-presets      | bun jest       | -                                   |
| 3          | typescript-config | tsconfig.json's used throughout the monorepo                                        | @repo/typescript-config | bun typescript | -                                   |

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Bun](https://bun.sh/) for package management and monorepo workspace
- [Biome](https://biomejs.dev/) for formatting & linting
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [taze](https://github.com/antfu-collective/taze) for updating dependencies across the monorepo

#### Other Utilities to Consider

- [Knip](https://github.com/webpro/knip) - Find unused code
- [date-fns](https://date-fns.org/) - Date utilities

## Resources

- Example Monorepos

  - [mattpocock/total-typescript-monorepo](https://github.com/mattpocock/total-typescript-monorepo) / [total-typescript-monorepo-template](https://github.com/mattpocock/total-typescript-monorepo-template)
  - [byCedric/expo-monorepo-example](https://github.com/byCedric/expo-monorepo-example) Expo + Web
  - [saasfly/saasfly](https://github.com/saasfly/saasfly) - Next.JS template
  - [enjidev/enji.dev](https://github.com/enjidev/enji.dev) - a monorepo for my personal website and projects, built with Turborepo + pnpm 📚
  - Misc
    - [hamlim/template-monorepo](https://github.com/hamlim/template-monorepo) - A quick and simple monorepo starter template (Bun, Next.js, Turbo) / Biome
    - [breezemm/breeze-web](https://github.com/breezemm/breeze-web) - Monorepo for Breeze Web - init with Shadcn in UI package, consumed elsewhere
    - [dangvanthanh/nuxt-turborepo-boilerplate](https://github.com/dangvanthanh/nuxt-turborepo-boilerplate) - review biome config
  - SST
    - [sayandedotcom/refhired.com](https://github.com/sayandedotcom/refhired.com) - SST + Turborepo

- Turborepo Generators
  - [turbo-generator](https://github.com/eXodes/turbo-generator) - example generators for a Next.JS app
  - [turborepo-template](https://github.com/dhoniaridho/turborepo-template/tree/main/turbo/generators) - example templates with various app packages
