---
description: development workflow for the agent to help with user requests
---

# Agent Development Workflow

This workflow guides the AI agent when assisting with orders in this monorepo.

## Core Rules

- **Formatting**: Always use 2 spaces for indentation.
- **Styling**: Use Emotion (`@emotion/react`, `@emotion/styled`) for all UI components.
- **Monorepo Structure**:
  - UI components go into `packages/ui` and are exported under the `@imspdr/ui` scope.
  - Applications go into `apps/`.
- **Dependencies**: React 18, TypeScript 5, Webpack 5.

## Step-by-Step Assistance

1. **Analyze Requirements**: Understand the feature or bug fix requested.
2. **Plan Changes**:
   - Identify which packages or apps need modification.
   - Use the `@imspdr/ui` package for shared components.
3. **Implementation**:
   - Write clean, type-safe code.
   - Ensure Emotion styles are consistent with the design system.
4. **Verification**:
   - Run `npm run build` in the relevant workspace.
   - Ensure no linting or type errors are introduced.
5. **Documentation**:
   - Update `walkthrough.md` or other documentation if necessary.

## Example Order Handling

When asked to "Add a search bar to kospi200":

- Add `SearchBar` component to `@imspdr/ui` if reusable.
- Export from `packages/ui/src/index.ts`.
- Import and use in `apps/kospi200/src/index.tsx`.
- Apply Emotion styles for a premium look.
