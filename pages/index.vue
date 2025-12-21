<template>
  <div>
    <About />
  </div>
</template>

<script setup lang="ts">
const appBarColor = useState('appBarColor', () => '#FFF')
const appTitleColor = useState('appTitleColor', () => '#000')

useHead({
  title: 'Pramod Devireddy',
  meta: [
    {
      name: 'description',
      content: 'Scientist/Engineer @ ISRO || Spacecraft Mission & Checkout Software Engineer || Full Stack Developer'
    },
    {
      property: 'og:title',
      content: 'Pramod Devireddy'
    },
    {
      property: 'og:description',
      content: 'Scientist/Engineer @ ISRO || Spacecraft Mission & Checkout Software Engineer || Full Stack Developer'
    },
    {
      name: 'twitter:title',
      content: 'Pramod Devireddy'
    },
    {
      name: 'twitter:description',
      content: 'Scientist/Engineer @ ISRO || Spacecraft Mission & Checkout Software Engineer || Full Stack Developer'
    }
  ]
})

onMounted(() => {
  appBarColor.value = '#4C8BF4'
  appTitleColor.value = '#FFF'
})
</script>
