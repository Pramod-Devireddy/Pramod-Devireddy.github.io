<template>
  <v-row>
    <v-col>
      <NuxtLink
        v-if="prev"
        :to="`/blog/${prev.slug}`"
        class="prev-blog-post text-truncate"
      >
        <v-icon>mdi-arrow-left</v-icon> &nbsp;
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </v-col>
    <v-col>
      <v-row justify="end">
        <NuxtLink
          v-if="next"
          :to="`/blog/${next.slug}`"
          class="next-blog-post text-truncate"
        >
          {{ next.title }} &nbsp;
          <v-icon>mdi-arrow-right</v-icon>
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  prev?: { title: string; slug: string } | null
  next?: { title: string; slug: string } | null
}>()
</script>

<style>
.prev-blog-post {
  text-decoration: none;
  color: #000 !important;
}

.prev-blog-post:hover {
  color: rgb(92, 148, 252) !important;
}

.next-blog-post {
  text-decoration: none;
  color: #000 !important;
}

.next-blog-post:hover {
  color: rgb(92, 148, 252) !important;
}
</style>
