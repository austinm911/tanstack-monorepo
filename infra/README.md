# SST Infra

When running custom pulumi component, bun doesn't work. Use TSX globally tsx -r dotenv/config infra/src/pages.ts

```ts
❯ bun run infra/src/pages.ts
35 | // high-quality error messages.
36 | //
37 | // As a side-effect of importing this file, we must enable the --allow-natives-syntax V8 flag. This
38 | // is because we are using V8 intrinsics in order to implement this module.
39 | const v8 = __importStar(require("v8"));
40 | v8.setFlagsFromString("--allow-natives-syntax");
```
