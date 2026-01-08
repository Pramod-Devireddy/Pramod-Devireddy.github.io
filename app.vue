<template>
  <div class="min-h-screen flex flex-col">
    <!-- App Bar -->
    <header class="fixed top-0 left-0 right-0 z-50 shadow-sm h-[100px] md:h-[75px]" :style="{ backgroundColor: appBarColor }">
      <div class="flex items-center h-full px-4 flex-col justify-center md:flex-row">
        <!-- Logo -->
        <div class="text-center mt-2 md:mt-0 md:text-left md:ml-10">
          <h1>
            <NuxtLink to="/" class="text-2xl font-light no-underline" :style="{ color: appTitleColor }">
              Pramod Devireddy
            </NuxtLink>
          </h1>
        </div>

        <div class="flex-1"></div>

        <!-- Navigation -->
        <nav class="text-center mb-2 md:mb-0 md:pr-10">
          <NuxtLink class="nav-button px-5 py-2 mx-1 text-base font-light rounded-full transition-all cursor-pointer"
            :style="{ color: appTitleColor }">
            Skills
          </NuxtLink>

          <NuxtLink class="nav-button px-5 py-2 mx-1 text-base font-light rounded-full transition-all cursor-pointer"
            :style="{ color: appTitleColor }">
            Projects
          </NuxtLink>

          <NuxtLink to="/blog"
            class="nav-button px-5 py-2 mx-1 text-base font-light rounded-full transition-all cursor-pointer"
            :class="{ 'nav-active': isBlogActive }" :style="{ color: appTitleColor }">
            Blog
          </NuxtLink>

          <NuxtLink class="nav-button px-5 py-2 mx-1 text-base font-light rounded-full transition-all cursor-pointer"
            :style="{ color: appTitleColor }">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 mt-[100px] md:mt-[75px]">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 py-3">
      <div class="flex flex-wrap items-center">
        <div class="w-full md:w-1/3"></div>

        <div class="w-full md:w-1/3 text-center">
          <span class="text-base font-light tracking-wide leading-9">
            Copyright &copy; {{ new Date().getFullYear() }} Pramod Devireddy
          </span>
        </div>

        <div class="w-full md:w-1/3 text-center md:text-right md:pr-4">
          <a class="inline-flex items-center justify-center w-10 h-10 mx-1 text-[#DA5B50] hover:opacity-75"
            target="_blank" href="mailto:devireddy.pramod@gmail.com">
            <span class="mdi mdi-gmail text-2xl"></span>
          </a>

          <a class="inline-flex items-center justify-center w-10 h-10 mx-1 text-[#0077BF] hover:opacity-75"
            target="_blank" href="https://www.linkedin.com/in/pramod-devireddy/">
            <span class="mdi mdi-linkedin text-2xl"></span>
          </a>

          <a class="inline-flex items-center justify-center w-10 h-10 mx-1 text-black hover:opacity-75" target="_blank"
            href="https://github.com/Pramod-Devireddy">
            <span class="mdi mdi-github text-2xl"></span>
          </a>

          <a class="inline-flex items-center justify-center w-10 h-10 mx-1 text-[#1A91DA] hover:opacity-75"
            target="_blank" href="https://twitter.com/PramodDevireddy">
            <span class="mdi mdi-twitter text-2xl"></span>
          </a>

          <a class="inline-flex items-center justify-center w-10 h-10 mx-1 text-black hover:opacity-75" target="_blank"
            href="https://codepen.io/domarpdev">
            <span class="mdi mdi-codepen text-2xl"></span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const appBarColor = useState('appBarColor', () => '#FFF')
const appTitleColor = useState('appTitleColor', () => '#000')
const route = useRoute()

const isBlogActive = computed(() => route.path.startsWith('/blog'))
</script>

<style>
html {
  overflow-y: auto;
}

.nav-button {
  transition: all 0.2s;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav-active {
  background-color: rgba(0, 0, 0, 0.15);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
  height: 10px;
  margin: 0 3px;
  padding: 0 3px;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 2px solid rgb(231, 231, 231);
  background-color: #a8a8a8;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
</style>
