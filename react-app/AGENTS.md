# AGENTS.md

This document contains guidelines for agentic coding agents working in the BetterCalauan React Next.js repository.

## Build / Lint / Test Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Note: This project has no test suite. Do not add Jest or other testing frameworks unless explicitly requested.

## Code Style Guidelines

### Import Patterns

1. **Path Aliases**: Use `@/` alias for all internal imports:
   ```ts
   import Component from '@/components/Component';
   import { useHook } from '@/hooks/useHook';
   import type { Type } from '@/types';
   ```

2. **Import Order**: External imports first, then internal, then relative:
   ```ts
   import { useState, useEffect } from 'react';
   import { useRouter } from 'next/navigation';
   import Component from '@/components/Component';
   import '../styles.css';
   ```

3. **Client Components**: Add `'use client';` at the top for files using React hooks or browser APIs

4. **Type Imports**: Use `import type` for type-only imports

### Formatting Conventions

1. **No Semicolons**: Omit semicolons at end of statements
2. **Quotes**: Single quotes for strings, double quotes for JSX attributes
3. **Indentation**: 2 spaces
4. **Arrow Functions**: Prefer arrow functions for callbacks and props

### TypeScript Guidelines

1. **Interfaces**: Use `interface` for object shapes, `type` for unions/primitives:
   ```ts
   interface Service { id: string; title: string; }
   type Language = 'en' | 'fil' | 'ilo';
   ```

2. **Component Props**: Define explicit interfaces for props with clear types
3. **Type Assertions**: Use `as const` for literal types
4. **Type Definitions**: Add new types to `/src/types/index.ts`

### Naming Conventions

1. **Files**: PascalCase for components, camelCase for utilities/hooks
2. **Components**: PascalCase matching filename
3. **Functions/Variables**: camelCase, descriptive names
4. **Constants**: UPPER_SNAKE_CASE (e.g., `RECENT_SEARCHES_KEY`)

### Error Handling

1. **localStorage Operations**: Always wrap in try-catch with silent fallback:
   ```ts
   try {
     const stored = localStorage.getItem(key);
     return stored ? JSON.parse(stored) : [];
   } catch {
     return [];
   }
   ```

2. **Optional Chaining**: Use optional chaining and nullish coalescing: `service.title?.toLowerCase() || ''`

3. **Browser API Checks**: Check `typeof window !== 'undefined'` for SSR safety

### React Patterns

1. **Custom Hooks**: Extract complex logic to `/src/hooks/` with proper error handling
2. **Event Handlers**: Use `useCallback` for event handlers passed as props
3. **Suspense**: Wrap client components with Suspense for async loading
4. **Context Providers**: Place in `/src/contexts/` with custom hooks

### Next.js Specific

1. **App Router**: Use Next.js 14 App Router patterns
2. **Metadata**: Export metadata constants from page components
3. **Links**: Use `<Link>` from `next/link` for internal navigation
4. **Dynamic Routes**: Use `[slug]` pattern for dynamic routes

### Styling

1. **CSS Classes**: Use existing CSS classes from `/public/assets/css/`
2. **Inline Styles**: Prefer CSS classes; use styled-jsx for component-specific styles:
   ```tsx
   <style jsx>{`
     .custom-class { padding: 20px; }
   `}</style>
   ```

3. **Bootstrap Icons**: Use `bi-*` classes for icons

### Data Access

1. **Static Data**: Import JSON/TS files from `/src/data/`
2. **Translation**: Use `useLanguage()` hook for all translatable strings

### Libraries & Integrations

1. **Chart.js**: Use react-chartjs-2 for data visualizations; register Chart.js components once
2. **Leaflet Maps**: Use react-leaflet; check SSR safety with `typeof window !== 'undefined'`
3. **No External APIs**: All data is static; do not add API calls unless requested

### Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - React components organized by feature
- `/src/contexts` - Context providers
- `/src/data` - Static data and content
- `/src/hooks` - Custom React hooks
- `/src/types` - TypeScript type definitions
- `/public/assets` - Static assets (CSS, images, JS)

### Additional Notes

- Multi-language support via custom LanguageContext (English, Filipino, Ilocano)
- ESLint config extends `next/core-web-vitals`
- No semicolons, single quotes, 2-space indentation throughout
- TypeScript strict mode enabled
