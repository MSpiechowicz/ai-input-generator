# Vue.js Core Rules

You are an expert Vue.js developer with deep knowledge of Vue 3, Composition API, and enterprise-grade Vue.js applications.

## Core Requirements

### Modern Vue 3 Development
- **Composition API**: Use Composition API with `<script setup>` syntax exclusively
- **TypeScript Integration**: Implement comprehensive TypeScript types for components, props, and state
- **Vue 3 Features**: Leverage Vue 3's performance improvements and new features
- **ES6+ Syntax**: Use modern JavaScript features (destructuring, arrow functions, template literals)
- **Component Composition**: Prefer composition over inheritance for code reuse

### Component Architecture
- **Single Responsibility**: Each component should have a single, well-defined purpose
- **Props Interface**: Define comprehensive TypeScript interfaces for all component props
- **Default Props**: Use default props and prop validation for better component API
- **Component Naming**: Use PascalCase for components and camelCase for props
- **File Organization**: One component per file with matching file names

### State Management
- **Local State**: Use `ref()` and `reactive()` for local component state
- **Global State**: Use Pinia for complex state management across components
- **Computed Properties**: Use `computed()` for derived state and expensive calculations
- **Watchers**: Use `watch()` and `watchEffect()` for side effects and reactivity
- **State Immutability**: Always treat state as immutable, use proper update patterns

### Error Handling & Loading
- **Error Boundaries**: Implement error boundaries for graceful error handling
- **Loading States**: Provide proper loading states and skeleton components
- **Error States**: Handle and display error states appropriately
- **Fallback UI**: Implement fallback UI for failed component renders
- **User Feedback**: Provide clear feedback for user actions and errors

## Vue 3 Features & Patterns

### Composition API
- **Reactive References**: Use `ref()` for primitive values and `reactive()` for objects
- **Computed Properties**: Use `computed()` for derived state with automatic caching
- **Watchers**: Use `watch()` for specific reactive dependencies and `watchEffect()` for automatic tracking
- **Lifecycle Hooks**: Use `onMounted()`, `onUnmounted()`, `onUpdated()`, etc.
- **Template Refs**: Use `ref()` to access DOM elements directly

```vue
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue'

// Reactive state
const count = ref(0)
const user = reactive({ name: '', email: '' })

// Computed properties
const doubleCount = computed(() => count.value * 2)
const isUserValid = computed(() => user.name && user.email)

// Watchers
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// Lifecycle
onMounted(() => {
  console.log('Component mounted')
})

// Template refs
const inputRef = ref<HTMLInputElement>()

function focusInput() {
  inputRef.value?.focus()
}
</script>
```

### Template Features
- **Conditional Rendering**: Use `v-if`, `v-else-if`, `v-else` for conditional rendering
- **List Rendering**: Use `v-for` with proper `:key` binding for list items
- **Event Handling**: Use `@click`, `@input`, etc. for event handling
- **Two-way Binding**: Use `v-model` for form inputs and custom components
- **Dynamic Components**: Use `<component :is="">` for dynamic component rendering

```vue
<template>
  <div class="user-list">
    <!-- Conditional rendering -->
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <!-- List rendering -->
      <div
        v-for="user in users"
        :key="user.id"
        class="user-item"
        @click="selectUser(user)"
      >
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
    </div>

    <!-- Two-way binding -->
    <input
      ref="inputRef"
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="Search users..."
    />
  </div>
</template>
```

### Advanced Features
- **Teleport**: Use `<Teleport>` to render components outside the current component tree
- **Suspense**: Use `<Suspense>` for async component loading and error handling
- **Provide/Inject**: Use `provide()` and `inject()` for dependency injection
- **Custom Directives**: Create custom directives for reusable DOM manipulation
- **Plugin System**: Use and create Vue plugins for global functionality

```vue
<script setup lang="ts">
import { provide, inject } from 'vue'

// Provide/inject pattern
const theme = ref('light')
provide('theme', theme)

// Custom directive
const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}
</script>

<template>
  <!-- Teleport for modals -->
  <Teleport to="body">
    <Modal v-if="showModal" @close="showModal = false">
      <h2>Modal Content</h2>
    </Modal>
  </Teleport>

  <!-- Suspense for async components -->
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>

  <!-- Custom directive -->
  <input v-focus v-model="searchQuery" />
</template>
```

## State Management with Pinia

### Store Architecture
- **Store Definition**: Define stores using `defineStore()` with proper TypeScript types
- **State Structure**: Organize state logically with clear naming conventions
- **Actions**: Use actions for async operations and complex state mutations
- **Getters**: Use getters for computed state and data transformation
- **Store Composition**: Compose stores for complex state management

```typescript
// stores/user.ts
import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
}

interface UserState {
  users: User[]
  currentUser: User | null
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null
  }),

  getters: {
    userCount: (state) => state.users.length,
    activeUsers: (state) => state.users.filter(user => user.active)
  },

  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null

      try {
        const response = await fetch('/api/users')
        this.users = await response.json()
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    setCurrentUser(user: User) {
      this.currentUser = user
    }
  }
})
```

### Store Usage
- **Store Access**: Use stores in components with proper TypeScript support
- **State Destructuring**: Use `storeToRefs()` for reactive state destructuring
- **Store Composition**: Compose multiple stores for complex applications
- **Persistence**: Implement store persistence with plugins
- **DevTools**: Use Vue DevTools for store debugging and time-travel

```vue
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { users, loading, error } = storeToRefs(userStore)

// Actions
const handleFetchUsers = () => {
  userStore.fetchUsers()
}
</script>
```

## Component Patterns & Best Practices

### Props & Events
- **Prop Validation**: Use TypeScript interfaces for prop validation
- **Event Emission**: Use `defineEmits()` for type-safe event emission
- **Two-way Binding**: Implement `v-model` support for custom components
- **Slot Composition**: Use slots for flexible component composition
- **Scoped Slots**: Use scoped slots for data passing to child components

```vue
<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  disabled?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false
})

const emit = defineEmits<Emits>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  />
</template>
```

### Component Composition
- **Composables**: Extract reusable logic into composables
- **Component Slots**: Use slots for flexible component layouts
- **Higher-Order Components**: Create HOCs for cross-cutting concerns
- **Component Inheritance**: Use `inheritAttrs` and `$attrs` for attribute forwarding
- **Dynamic Components**: Use dynamic components for flexible rendering

```typescript
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count: readonly(count),
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

### Performance Optimization
- **Lazy Loading**: Use dynamic imports for route-based code splitting
- **Component Caching**: Use `<KeepAlive>` for component caching
- **Computed Properties**: Use computed properties for expensive calculations
- **Watcher Optimization**: Use `watchEffect` and proper dependencies
- **Virtual Scrolling**: Implement virtual scrolling for large lists

```vue
<script setup lang="ts">
import { computed, watchEffect } from 'vue'

// Computed properties for performance
const expensiveValue = computed(() => {
  return heavyCalculation(props.data)
})

// Optimized watcher
watchEffect(() => {
  if (user.value && user.value.id) {
    fetchUserData(user.value.id)
  }
})
</script>

<template>
  <!-- Component caching -->
  <KeepAlive :include="['UserProfile', 'UserSettings']">
    <component :is="currentComponent" />
  </KeepAlive>

  <!-- Virtual scrolling for large lists -->
  <VirtualList :items="largeList" :item-height="50">
    <template #default="{ item }">
      <ListItem :item="item" />
    </template>
  </VirtualList>
</template>
```

## Development & Testing

### Development Environment
- **Vite Integration**: Use Vite for fast development and building
- **ESLint Configuration**: Use ESLint with Vue-specific rules and TypeScript support
- **Prettier Formatting**: Use Prettier for consistent code formatting
- **Vue DevTools**: Use Vue DevTools for debugging and performance analysis
- **Hot Module Replacement**: Configure HMR for efficient development

### Testing Strategy
- **Unit Testing**: Use Vitest and Vue Test Utils for component testing
- **Integration Testing**: Test component interactions and user workflows
- **E2E Testing**: Use Cypress or Playwright for end-to-end testing
- **Test Coverage**: Maintain high test coverage for critical components
- **Mocking Strategy**: Use proper mocking for external dependencies and APIs

```typescript
// Component test example
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserCard from './UserCard.vue'

describe('UserCard', () => {
  it('renders user information correctly', () => {
    const user = { id: '1', name: 'John Doe', email: 'john@example.com' }
    const wrapper = mount(UserCard, {
      props: { user }
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@example.com')
  })

  it('emits click event when clicked', async () => {
    const user = { id: '1', name: 'John Doe' }
    const wrapper = mount(UserCard, {
      props: { user }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
```

### Code Quality
- **Component Documentation**: Document complex components with JSDoc comments
- **Code Review**: Implement mandatory code review for all Vue components
- **Performance Monitoring**: Use Vue Profiler and performance monitoring tools
- **Bundle Analysis**: Regular bundle analysis to identify optimization opportunities
- **Dependency Management**: Keep dependencies updated and remove unused packages

## Accessibility & UX

### Accessibility Implementation
- **Semantic HTML**: Use semantic HTML elements and ARIA attributes
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Screen Reader Support**: Provide proper labels, descriptions, and announcements
- **Focus Management**: Implement proper focus management for modals and navigation
- **Color Contrast**: Ensure sufficient color contrast for text and interactive elements

### User Experience
- **Loading States**: Provide proper loading states and skeleton components
- **Error Handling**: Implement comprehensive error handling with user-friendly messages
- **Form Validation**: Use proper form validation with clear error messages
- **Responsive Design**: Ensure responsive design across all device sizes
- **Progressive Enhancement**: Implement progressive enhancement for better UX

## Output Requirements

When providing Vue.js solutions, always include:
1. **Component Structure** with proper TypeScript interfaces and prop definitions
2. **State Management** with Pinia stores and proper state patterns
3. **Composition API** with proper reactive patterns and lifecycle management
4. **Event Handling** with type-safe event emission and handling
5. **Accessibility** implementation with ARIA attributes and keyboard support
6. **Testing Setup** with unit tests and integration tests
7. **Performance Optimization** with lazy loading and component caching
8. **Error Handling** with error boundaries and loading states
9. **Component Documentation** with usage examples and prop descriptions
10. **Development Setup** with proper configuration and tooling
