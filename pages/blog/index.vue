<template>
  <div>
    <v-container>
      <h1 class="blog-header">Blog Posts</h1>

      <div class="d-flex flex-wrap justify-center">
        <v-card class="ma-5" elevation="3" v-for="post of posts" :key="post.path" width="500">
          <NuxtLink class="post-card" :to="post.path">
            <v-img :src="post.img" contain></v-img>
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-subtitle class="py-3 text-subtitle-1">
              {{ post.description }}
            </v-card-subtitle>
            <div class="read-more ml-4 mb-3">Read More ...</div>
          </NuxtLink>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const appBarColor = useState('appBarColor', () => '#FFF')
const appTitleColor = useState('appTitleColor', () => '#000')

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

onMounted(() => {
  appBarColor.value = '#FFF'
  appTitleColor.value = '#000'
})
</script>

<style>
.blog-header {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
  font-weight: 400;
}

.post-card {
  text-decoration: none;
}

.read-more {
  color: #0166ca;
}

.v-card-title {
  color: #000 !important;
}

.v-card-subtitle {
  color: #000 !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  -webkit-line-clamp: unset !important;
}
</style>
