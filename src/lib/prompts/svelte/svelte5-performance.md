# Svelte 5 Performance Guidelines

## Reactivity Optimization
- Use $derived sparingly and only when needed
- Avoid unnecessary $effect calls - prefer derived state
- Use $state with primitive values when possible
- Consider $state.frozen for immutable complex objects

## Component Performance
- Implement proper component boundaries
- Use snippet parameters efficiently
- Avoid creating functions in templates
- Consider component preloading for routes

## Bundle Optimization
- Use dynamic imports for code splitting
- Leverage SvelteKit's automatic tree shaking
- Optimize asset loading (images, fonts, etc.)
- Consider server-side rendering for initial page loads

## Memory Management
- Clean up subscriptions and effects properly
- Avoid memory leaks in long-running effects
- Use proper cleanup in component lifecycle
- Monitor component mounting/unmounting patterns
