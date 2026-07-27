# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.
## Optimize Performance

To optimize the performance of your React application, consider the following:

- **Code Splitting**: Implement code splitting to load only the necessary code for the current view, reducing initial load time.
- **Lazy Loading**: Use `React.lazy` and `Suspense` to lazy-load components and resources.
- **Memoization**: Utilize `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders of components and computations.
- **Virtualization**: For large lists, employ techniques like windowing or virtualization to render only the visible items.
- **Bundle Analysis**: Use tools like Webpack Bundle Analyzer to identify and optimize large dependencies.
Note: This will impact Vite dev & build performances.
