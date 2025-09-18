Expo Router migration notes

- `app/` directory added with `_layout.tsx` and route wrappers for existing screens.
- Entry point `index.js` re-exports `expo-router/entry`.
- Keep using existing `src/` files; route wrappers import them to avoid moving code.

Next steps for developer:

1. Install dependencies (if not already):

```bash
cd job-app
pnpm install # or npm install / yarn
```

2. Run the app:

```bash
pnpm start
```

3. Convert complex navigation flows into file-based routes in `app/` as needed.
