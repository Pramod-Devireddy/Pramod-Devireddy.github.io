<template>
  <div class="flex justify-between items-center mt-8">
    <div class="flex-1">
      <NuxtLink v-if="prev" :to="`/blog/${prev.slug}`"
        class="inline-flex items-center text-black no-underline hover:text-primary truncate max-w-full">
        <span class="mdi mdi-arrow-left mr-2"></span>
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="flex-1 text-right">
      <NuxtLink v-if="next" :to="`/blog/${next.slug}`"
        class="inline-flex items-center text-black no-underline hover:text-primary truncate max-w-full justify-end">
        {{ next.title }}
        <span class="mdi mdi-arrow-right ml-2"></span>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  prev?: { title: string; slug: string } | null
  next?: { title: string; slug: string } | null
}>()
</script>
