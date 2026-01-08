<template>
  <div class="container mx-auto mb-16">
    <div class="flex justify-center">
      <div class="w-full xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-10/12">
        <div class="my-5">
          <NuxtLink to="/blog" class="inline-flex items-center text-black no-underline hover:text-primary">
            <span class="mdi mdi-arrow-left mr-2"></span> Blog List
          </NuxtLink>
        </div>

        <h1 class="text-3xl sm:text-4xl font-normal">{{ post?.title }}</h1>
        <h4 class="my-4 font-normal italic text-gray-600">{{ post?.description }}</h4>

        <div class="flex flex-wrap items-center mt-8 mb-10">
          <div class="rounded-full overflow-hidden w-[55px] h-[55px] shadow-lg">
            <NuxtImg src="/pramod-devireddy-96x96.jpg" alt="Pramod Devireddy" width="55" height="55" />
          </div>
          <div class="ml-3 mt-1">
            <div class="font-medium">{{ post?.author?.name }}</div>
            <div class="text-sm font-light text-gray-600">
              <span>{{ formatDate(post?.publishedAt) }}</span> •
              <ReadTime :content="post" />
            </div>
          </div>
          <div class="flex-1"></div>
          <div class="ml-16 mt-3 flex gap-1">
            <button class="p-2 text-gray-500 hover:text-primary transition-colors" @click="tweet()">
              <span class="mdi mdi-twitter text-xl"></span>
            </button>
            <button class="p-2 text-gray-500 hover:text-primary transition-colors" @click="linkedInPost()">
              <span class="mdi mdi-linkedin text-xl"></span>
            </button>
            <button class="p-2 text-gray-500 hover:text-primary transition-colors" @click="facebookPost()">
              <span class="mdi mdi-facebook text-xl"></span>
            </button>
          </div>
        </div>

        <div class="rounded-lg shadow-md overflow-hidden mb-10">
          <NuxtImg :src="post?.img" class="w-full" />
        </div>

        <ContentRenderer class="blog-content" v-if="post" :value="post" />

        <PrevNextBlog :prev="prev" :next="next" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style>
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

  ul {
    padding-left: 1.5em;
    margin-bottom: 1em;
    list-style-type: disc;
  }

  ol {
    padding-left: 1.5em;
    margin-bottom: 1em;
    list-style-type: decimal;
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
