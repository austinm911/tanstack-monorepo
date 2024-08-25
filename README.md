# Turborepo Monorepo (Tanstack/Hono/SST/Drizzle)

## Goals

- Simplicity over complexity
- Modularity
- Taking a bet on the best "rising" libraries offering the best developer experience

## Known Issues

See [TODO.md](./TODO.md) for more details

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
bunx taze --include lodash,webpack # filter by package name
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

| Index No.  | Workspace/Folder  | Info.                                                                               |
| ---------- | ----------------- | ----------------------------------------------------------------------------------- |
| apps /     |                   |                                                                                     |
| 1          | api               | A [Hono](https://hono.dev/) server compatible with Cloudflare Workers               |
| 2          | astro             | A [Astro](https://astro.build/) for content-driven websites                         |
| 3          | spa               | A [Tanstack Router](https://tanstack.com/router) SPA                                |
| packages / |                   |                                                                                     |
| 1          | ui                | A dummy React UI library (which contains `<CounterButton>` and `<Link>` components) |
| 2          | typescript-config | tsconfig.json's used throughout the monorepo                                        |
| 3          | core              | Core package for business logic                                                     |
| 4          | db                | Database package for [Drizzle ORM](https://drizzle.dev/)                            |

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [SST](https://sst.dev/) for Infrastructure as Code
- [Bun](https://bun.sh/) for package management, monorepo workspace, test runner
- [Biome](https://biomejs.dev/) for formatting & linting
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [taze](https://github.com/antfu-collective/taze) for updating dependencies across the monorepo

#### Other Utilities to Consider

- [Knip](https://github.com/webpro/knip) - Find unused code
- [date-fns](https://date-fns.org/) - Date utilities
- Auth
  - WorkOS
  - Clerk
  - Supabase
- Email
  - [Resend](https://resend.com/) - Transaction & Marketing Emails

## Syncing Github Template

Refer to [AndreasAugustin/actions-template-sync](https://github.com/AndreasAugustin/actions-template-sync) for a github action to sync the template. This repo uses the [.github/workflows/template-sync.yml](./.github/workflows/template-sync.yml) file to sync the template, which you can manually trigger the action from the Actions tab in Github. You can configure this to automatically sync with a cron schedule if you'd like.

## Resources

- Example Monorepos

- [vercel/turborepo/examples/kitchen-sink](https://github.com/vercel/turborepo/tree/ca29f0fa75ad2cf4c9640e8ffdef406e63961472/examples/kitchen-sink)
  - [mattpocock/total-typescript-monorepo](https://github.com/mattpocock/total-typescript-monorepo) / [total-typescript-monorepo-template](https://github.com/mattpocock/total-typescript-monorepo-template)
  - [byCedric/expo-monorepo-example](https://github.com/byCedric/expo-monorepo-example) Expo + Web
  - [saasfly/saasfly](https://github.com/saasfly/saasfly) - Next.JS template
  - [enjidev/enji.dev](https://github.com/enjidev/enji.dev) - a monorepo for my personal website and projects, built with Turborepo + pnpm 📚
  - Misc
    - [hamlim/template-monorepo](https://github.com/hamlim/template-monorepo) - A quick and simple monorepo starter template (Bun, Next.js, Turbo) / Biome
    - [breezemm/breeze-web](https://github.com/breezemm/breeze-web) - Monorepo for Breeze Web - init with Shadcn in UI package, consumed elsewhere
    - [dangvanthanh/nuxt-turborepo-boilerplate](https://github.com/dangvanthanh/nuxt-turborepo-boilerplate) - review biome config
  - SST
    - [sst/ion/tree/dev/examples/aws-monorepo](https://github.com/sst/ion/tree/dev/examples/aws-monorepo)
    - [sayandedotcom/refhired.com](https://github.com/sayandedotcom/refhired.com) - SST + Turborepo
    - [marcotheo/qwik-sst-deployments](https://github.com/marcotheo/qwik-sst-deployments) - see example of SST + Cloudflare Pages deployment with Pulumi
  - Pulumi
    - [martypenner/surface-2-air-site](https://github.com/martypenner/surface-2-air-site) - example of Pulumi usage
    - [ginetta/ginetta-tonic-festival](https://github.com/ginetta/ginetta-tonic-festival/blob/bcbefd4b3acf6df100b687295f73fc469b984e55/infrastructure/package.json) - see Pulumi usage

- Turborepo Generators
  - [turbo-generator](https://github.com/eXodes/turbo-generator) - example generators for a Next.JS app
  - [turborepo-template](https://github.com/dhoniaridho/turborepo-template/tree/main/turbo/generators) - example templates with various app packages

- tsup
  - [treeshaking-with-tsup](https://dorshinar.me/posts/treeshaking-with-tsup)

### Syncing Github Template

- [GitHub templates and repository sync | 0xDC.me](https://0xdc.me/blog/github-templates-and-repository-sync/)
- [actions-template-sync](https://github.com/AndreasAugustin/actions-template-sync) - seems most used
- [template-sync](https://github.com/template-tools/template-sync)
- [coopTilleuls/template-sync](https://github.com/coopTilleuls/template-sync)

## Notes

- Package.json settings
  - Refer to [Live Types in a TypeScript Monorepo](https://colinhacks.com/essays/live-types-typescript-monorepo?q=1) and [treeshaking-with-tsup](https://dorshinar.me/posts/treeshaking-with-tsup) - either use `exports` to export the `index.tsx/ts` file or use baseUrl/paths in base tsconfig.json to point to the `index.tsx/ts` file
