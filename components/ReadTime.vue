<template>
  <span>{{ readTime }} min read</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: any
}>()

const readTime = computed(() => {
  if (!props.content) return 0
  const contentText = JSON.stringify(props.content)
  const words = contentText.split(' ').length
  const wordsPerMinute = 200
  return Math.ceil(words / wordsPerMinute)
})
</script>
