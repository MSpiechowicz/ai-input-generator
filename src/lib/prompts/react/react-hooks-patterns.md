# React Hooks Patterns

## State Management Hooks
- **useState**: For simple local state management
- **useReducer**: For complex state logic with multiple actions
- **useContext**: For consuming context values
- **Custom hooks**: Extract and reuse stateful logic

## Effect Patterns
- **useEffect**: Side effects, data fetching, subscriptions
- **useLayoutEffect**: Synchronous effects that need DOM measurements
- **Cleanup**: Always clean up subscriptions and timeouts
- **Dependencies**: Proper dependency arrays to avoid infinite loops

## Performance Hooks
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize function references
- **React.memo**: Prevent unnecessary re-renders
- **Profiler**: Measure component performance
