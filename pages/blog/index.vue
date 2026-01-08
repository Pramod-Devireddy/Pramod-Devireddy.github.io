<template>
  <div>
    <div class="container mx-auto px-4">
      <h1 class="text-center mt-4 mb-8 text-3xl font-normal">Blog Posts</h1>

      <div class="flex flex-wrap justify-center gap-5">
        <div v-for="post of posts" :key="post.path"
          class="w-full max-w-[500px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <NuxtLink class="block no-underline" :to="post.path">
            <NuxtImg :src="post.img" class="w-full" />
            <h3 class="text-xl font-medium p-4 text-black">{{ post.title }}</h3>
            <p class="text-gray-700 px-4 pb-2">
              {{ post.description }}
            </p>
            <div class="text-primary ml-4 mb-3">Read More ...</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('blog')
    .order('stem', 'ASC')
    .all()
)

useHead({
  title: 'Blog - Pramod Devireddy',
  meta: [
    {
      name: 'description',
      content: 'Blog Posts by Pramod Devireddy'
    },
    {
      property: 'og:title',
      content: 'Blog - Pramod Devireddy'
    },
    {
      property: 'og:description',
      content: 'Blog Posts by Pramod Devireddy'
    },
    {
      name: 'twitter:title',
      content: 'Blog - Pramod Devireddy'
    },
    {
      name: 'twitter:description',
      content: 'Blog Posts by Pramod Devireddy'
    }
  ]
})
</script>
