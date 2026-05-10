<script setup lang="ts">
const props = defineProps<{ currentPath: string }>();

const isActive = (path: string) =>
  path === '/' ? props.currentPath === '/' : props.currentPath.startsWith(path);
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <a href="/" :class="['nav-link', { 'nav-link--active': isActive('/') }]">Home</a>
      <a href="/blog" :class="['nav-link', { 'nav-link--active': isActive('/blog') }]">Blog</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/tokens' as *;

.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba($bg, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $surface;
}

.nav-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  display: inline-block;
  padding: 1rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: $text-muted;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: $text;
  }

  &--active {
    color: $accent;
    border-bottom-color: $accent;
  }
}
</style>
