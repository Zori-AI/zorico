# 🧭 Code Style Guidelines

These guidelines ensure consistency, readability, and maintainability across the project. All developers should follow these conventions when writing or reviewing code.


## 📁 1. File and Component Structure

 - Each file should contain one logical component (React component, hook, utility, etc.).
 - Avoid “god components” — a single file must not exceed 300 lines of code.
If it grows larger, split it into subcomponents or extract logic into a hook or helper.
 - Do not use empty `index.ts / index.tsx` wrappers.
Export directly from the component file for clarity and simpler imports:
```tsx
export { MyComponent } from "./MyComponent";
```
 - Organize components logically by domain, not by type (e.g., features/UserCard instead of components/UserCard).

## 🧩 2. Reusability and Architecture

Follow DRY (Don’t Repeat Yourself) and KISS (Keep It Simple, Stupid) principles:
 - Avoid duplicating logic or UI patterns.
 - Keep solutions simple and practical.
 - Reuse common elements, but don’t over-split — each component should have a clear purpose.

Apply SRP (Single Responsibility Principle): one component → one responsibility.

Separate concerns:
 - UI components → layout and rendering
 - Hooks / logic components → state, effects, and data logic
 - Utilities → pure functions and helpers

## 🧱 3. Naming Conventions

Use camelCase for all files, variables, and functions.
 - Component files → `myComponent.tsx`
 - Hooks → `useCustomHook.ts`
 - Utilities → `formatDate.ts`

React components must start with an uppercase letter (MyButton, UserCard).

Avoid unnecessary abbreviations. Prefer getUserProfile over getUsrPrf.

Constants should be UPPER_CASE (DEFAULT_TIMEOUT, API_URL).

Tests should follow the same naming convention as the file they test:
```
myComponent.test.tsx
useCustomHook.test.ts
```

## 📦 4. Import Order and Structure

Maintain the following import order:
1. React / Next.js imports
2. Third-party libraries
3. Absolute imports (@/components, @/utils, etc.)
4. Relative imports (./, ../)
5. Styles (.css, .scss, .module.css)

Example:
````tsx

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date";

import styles from "./MyComponent.module.css";

````

Group imports logically and never mix default and named imports from the same module in different lines.

🧠 5. TypeScript Rules

- Always use explicit types for function parameters and return values if not obvious.
- Avoid any. Use unknown or create a proper type/interface instead.
- Prefer:
  - type → for simple shapes
  - interface → for extendable structures
- Co-locate types near the component when only used there;
share them in src/types/ or the domain’s types.ts when reused.
- Prefer string literal unions instead of enums:
````tsx
type Status = "idle" | "loading" | "success" | "error";
````
- Avoid non-null assertions (!) unless absolutely necessary.
- Use readonly and const to enforce immutability.

## 🎨 6. Formatting and Style Tools

### Prettier

Handles all code formatting:
 - 2 spaces per indent
 - Single quotes
 - Trailing commas where valid
 - Line width: 100

### ESLint

Ensures best practices and consistent style.
Recommended base configs:
 - `eslint:recommended`
 - `plugin:@typescript-eslint/recommended`
 - `plugin:react/recommended`
 - `plugin:react-hooks/recommended`
 - `plugin:prettier/recommended`

Example .eslintrc.json:
````json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "max-lines": ["warn", { "max": 300 }],
    "react/jsx-pascal-case": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
````

## ⚙️ 7. Line Endings, Encoding & Files

 - Use LF (\n) for line endings (cross-platform standard).
 - UTF-8 encoding without BOM.
 - Include .editorconfig and .gitattributes to enforce consistency.
 - Always end files with a single newline.

## 🧾 8. Commit and PR Guidelines

- Write clear, descriptive commit messages:

````githubexpressionlanguage
ZR-{{TICKET_NUMBER}} feat: add new Button component
ZR-{{TICKET_NUMBER}} fix: handle token refresh edge case
ZR-{{TICKET_NUMBER}} refactor: simplify profile update logic
````
 - PR titles should follow the same convention.
 - Keep PRs small and focused - one logical change per PR.
