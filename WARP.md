# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript + Vite project configured for modern web development. The project uses:

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vite** as the build tool and dev server
- **Pinia** for state management
- **Vue Router** for routing
- **TailwindCSS v4** for styling
- **ESLint + Prettier** for code quality

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev          # Start dev server with hot reload
npm run preview      # Preview production build locally
```

### Building
```bash
npm run build        # Full production build (includes type-check)
npm run build-only   # Build without type checking
npm run type-check   # Run TypeScript compiler checks
```

### Code Quality
```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

## Architecture

### Project Structure
- `src/` - Main source directory
  - `App.vue` - Root Vue component
  - `main.ts` - Application entry point
  - `router/index.ts` - Vue Router configuration
  - `stores/counter.ts` - Pinia store example
- `public/` - Static assets
- `vite.config.ts` - Vite configuration
- `tsconfig.*.json` - TypeScript configurations

### Key Configurations

#### TypeScript Setup
- Uses project references with separate configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)
- Path alias `@/*` maps to `src/*`
- Strict TypeScript settings with Vue support via `vue-tsc`

#### ESLint Configuration
- Flat config format in `eslint.config.ts`
- Vue + TypeScript rules
- Prettier integration for formatting
- Excludes build directories (`dist/`, `coverage/`)

#### Prettier Settings
- Single quotes, no semicolons
- 100 character line width
- Configuration in `.prettierrc.json`

### State Management
Uses Pinia with Composition API pattern:
- Stores located in `src/stores/`
- Example counter store demonstrates reactive state pattern

### Routing
Vue Router configured for:
- Web history mode
- Base URL from environment
- Currently has empty routes array (ready for expansion)

## Development Notes

### Node.js Requirements
- Node.js ^20.19.0 || >=22.12.0 (specified in package.json engines)

### Build Process
The build command runs type checking and building in parallel using `npm-run-all2`

### Development Tools
- Vite dev tools plugin enabled for debugging
- Auto-prefixer for CSS compatibility
- VS Code extensions recommended: Vue Language Features (Volar)

### File Conventions
- Vue components use `<script setup>` syntax
- TypeScript throughout
- Path imports use `@/` alias for src directory
