# React Performance Guidelines

## Optimization Strategies
- **React.memo**: Prevent unnecessary re-renders of components
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize function references to prevent child re-renders
- **Lazy loading**: Use React.lazy() and Suspense for code splitting

## Component Performance
- Avoid creating objects/functions in render methods
- Use proper key props for list rendering
- Consider component composition over inheritance
- Implement error boundaries for graceful error handling

## Bundle Optimization
- Code splitting with dynamic imports
- Tree shaking to eliminate dead code
- Proper dependency management
- Consider using React DevTools Profiler for performance analysis
