# Name: React Bits Component Integrator
# Description: Guides Claude to look up, download, and configure animated UI components from React Bits.

## Context
You have access to the React Bits UI library for high-performance, animated React components using Tailwind CSS, Framer Motion, and GSAP. 

## Integration Rules
1. When asked to build interactive or highly animated UI components (like Antigravity animations, text reveals, or particle backgrounds), prefer using React Bits components.
2. Refer to the official registry format. Use the shadcn registry protocol compatible with React Bits Pro if adding files directly.
3. Ensure any required dependencies (e.g., `motion/react`, `gsap`, `lucide-react`) are installed via npm/pnpm before writing the component code.
4. Always structure the imported component into the local `@/components/react-bits/` directory to keep third-party animated components organized and separate from custom code.
5. When installing a React Bits component, run: `npx shadcn@latest add "<react-bits-registry-url>"` or manually copy the component source from reactbits.dev into the appropriate local file.
6. After installing, update any import paths to match the project's alias config (e.g., `@/components/react-bits/ComponentName`).
7. React Bits components often require peer dependencies — always check the component's listed requirements on reactbits.dev and install them if missing.
8. Do not modify the core animation logic inside React Bits components unless the user explicitly requests it; instead wrap them in a local adapter component.
9. When a React Bits component accepts a `className` prop, use Tailwind utility classes for layout/sizing overrides rather than inline styles.
10. Test animated components in the browser after integration — verify animations play correctly and no console errors appear related to missing dependencies or invalid hooks.
