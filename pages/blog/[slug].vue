<template>
  <v-container class="mb-15">
    <v-row justify="center">
      <v-col xl="5" lg="7" md="10" sm="10">
        <div class="mb-5">
          <NuxtLink to="/blog" class="blog-list-link">
            <v-icon>mdi-arrow-left</v-icon> &nbsp; Blog List
          </NuxtLink>
        </div>

        <h1 class="blog-title">{{ post?.title }}</h1>
        <h4 class="blog-description">{{ post?.description }}</h4>
        <div class="d-flex flex-wrap blog-details">
          <v-avatar class="elevation-10" size="55">
            <NuxtImg src="/pramod-devireddy-96x96.jpg" alt="Pramod Devireddy" width="55" height="55" />
          </v-avatar>
          <div class="ml-3 mt-1">
            <div class="blog-author">{{ post?.author?.name }}</div>
            <div class="blog-time">
              <span>{{ formatDate(post?.publishedAt) }}</span> •
              <ReadTime :content="post" />
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="ml-16 mt-3">
            <v-btn icon color="#757575" variant="text" @click="tweet()">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn class="mx-n1" icon color="#757575" variant="text" @click="linkedInPost()">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon color="#757575" variant="text" @click="facebookPost()">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </div>

        <v-card class="mb-10" elevation="3">
          <v-img :src="post?.img"></v-img>
        </v-card>

        <ContentRenderer class="blog-content" v-if="post" :value="post" />

        <PrevNextBlog :prev="prev" :next="next" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const appBarColor = useState('appBarColor', () => '#FFF')
const appTitleColor = useState('appTitleColor', () => '#000')
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryCollection('blog')
    .where('stem', '=', `blog/${route.params.slug}`)
    .first()
)

const { data: allPosts } = await useAsyncData('all-blog-posts', () =>
  queryCollection('blog')
    .order('stem', 'ASC')
    .all()
)

const prev = computed(() => {
  if (!allPosts.value || !post.value) return null
  const currentIndex = allPosts.value.findIndex(p => p.stem === post.value?.stem)
  if (currentIndex > 0) {
    const prevPost = allPosts.value[currentIndex - 1]
    return {
      title: prevPost?.title || '',
      slug: prevPost?.stem?.split('/').pop() || ''
    }
  }
  return null
})

const next = computed(() => {
  if (!allPosts.value || !post.value) return null
  const currentIndex = allPosts.value.findIndex(p => p.stem === post.value?.stem)
  if (currentIndex >= 0 && currentIndex < allPosts.value.length - 1) {
    const nextPost = allPosts.value[currentIndex + 1]
    return {
      title: nextPost?.title || '',
      slug: nextPost?.stem?.split('/').pop() || ''
    }
  }
  return null
})

const formatDate = (date: unknown) => {
  if (!date) return ''
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date as string | number | Date).toLocaleDateString('en', options)
}

const tweet = () => {
  const tweetURL = `https://twitter.com/intent/tweet?text=${document.title}&url=${location.href}`
  window.open(tweetURL, '_blank')
}

const linkedInPost = () => {
  const linkedInPostURL = `https://www.linkedin.com/shareArticle/?mini=true&url=${location.href}`
  popupCenter(linkedInPostURL, 500, 500)
}

const facebookPost = () => {
  const fbPostURL = `https://www.facebook.com/sharer/sharer.php?u=${location.href}&display=page`
  window.open(fbPostURL, '_blank')
}

const popupCenter = (url: string, w: number, h: number) => {
  const dualScreenLeft = window.screenLeft ?? 0
  const dualScreenTop = window.screenTop ?? 0

  const width = window.innerWidth || document.documentElement.clientWidth || screen.width
  const height = window.innerHeight || document.documentElement.clientHeight || screen.height

  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop

  const newWindow = window.open(
    url,
    '_blank',
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
  )

  if (newWindow) {
    newWindow.focus()
  }
}

useHead({
  title: `${post.value?.title} - Pramod Devireddy`,
  meta: [
    {
      name: 'description',
      content: post.value?.description || ''
    },
    {
      property: 'og:title',
      content: post.value?.title || ''
    },
    {
      property: 'og:description',
      content: post.value?.description || ''
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'twitter:title',
      content: post.value?.title || ''
    },
    {
      name: 'twitter:description',
      content: post.value?.description || ''
    },
    {
      property: 'og:image',
      content: `https://Pramod-Devireddy.github.io${post.value?.img}`
    },
    {
      property: 'og:image:secure_url',
      content: `https://Pramod-Devireddy.github.io${post.value?.img}`
    },
    {
      property: 'og:image:alt',
      content: post.value?.title || ''
    },
    {
      name: 'twitter:image',
      content: `https://Pramod-Devireddy.github.io${post.value?.img}`
    }
  ]
})

onMounted(() => {
  appBarColor.value = '#FFF'
  appTitleColor.value = '#000'
})
</script>

<style>
.blog-list-link {
  text-decoration: none;
  color: #000;
}

.blog-list-link:hover {
  color: rgb(92, 148, 252);
}

.blog-title {
  font-size: 48px;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  .blog-title {
    font-size: 36px;
  }
}

.blog-description {
  font-weight: 400;
  font-style: italic;
}

.blog-details {
  margin-top: 30px;
  margin-bottom: 40px;
}

.blog-time {
  font-size: 15px;
  font-weight: 300;
}

.blog-content {
  margin-top: 40px;
  line-height: 32px;


  p {
    line-height: 32px;
  }

  a {
    text-decoration: none;
  }

  h2 a {
    font-weight: 500;
    line-height: 45px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.87)
  }

  h3 a {
    color: currentcolor;
    border-radius: 3px;
    font-family: 'Consolas', 'Roboto Mono', monospace;
    font-size: 0.85em;
    margin: 0px;
    padding: 0.25rem 0.5rem;
    font-weight: 400;
    all: unset;
    background-repeat: no-repeat;
    box-sizing: inherit;
  }

  p a {
    color: rgb(92, 148, 252);
  }

  a:hover {
    color: rgb(92, 148, 252);
  }

  h2,
  h3,
  h4 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  ul,
  ol {
    padding-left: 1.5em;
    margin-bottom: 1em;
  }

  blockquote {
    border-left: 4px solid #4C8BF4;
    padding-left: 1em;
    margin-left: 0;
    font-style: italic;
  }

  pre {
    background-color: #1e1e1e;
    border-radius: 8px;
    overflow-x: auto;
    padding: 1rem;
  }

  code {
    display: inline-block;
    background: rgba(27, 31, 35, .05);
    border-radius: 4px;
    font-family: consolas;
    padding: 0.25rem;
  }
}
</style>
