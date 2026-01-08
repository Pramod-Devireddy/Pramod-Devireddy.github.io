<template>
  <div>
    <!-- Profile Section -->
    <div class="bg-primary text-white text-lg font-light p-4 text-center shadow-lg">
      <div class="rounded-full overflow-hidden w-[150px] h-[150px] mx-auto shadow-2xl">
        <NuxtImg src="/pramod-devireddy1-200x200.jpg" alt="Pramod Devireddy" width="150" height="150" />
      </div>
      <div class="font-normal tracking-[5px] my-2">
        PRAMOD DEVIREDDY
      </div>
      <div class="text-base text-gray-100">
        Scientist/Engineer - SE,
        <b>ISRO</b>🚀
      </div>
      <div class="text-base">
        Spacecraft Mission & Checkout Software Developer
      </div>
      <div class="text-base text-gray-100">
        (2016 - present)
      </div>
      <a href="/Pramod-Devireddy-CV.pdf" download="Pramod-Devireddy-CV.pdf" target="_blank"
        class="inline-flex items-center tracking-wider gap-2 mt-4 px-4 py-2 bg-success text-white rounded shadow-md hover:bg-green-600 transition-colors">
        DOWNLOAD CV
        <span class="mdi mdi-download"></span>
      </a>
    </div>

    <!-- Skills Section -->
    <div class="text-center my-8 mx-[15%]">
      <div class="tracking-[2px] font-medium my-2">
        SKILLS
      </div>
      <div class="flex flex-wrap justify-center">
        <span class="skill-chip">C</span>
        <span class="skill-chip">C++</span>
        <span class="skill-chip">Go</span>
        <span class="skill-chip">Qt</span>
        <span class="skill-chip">Matlab</span>
        <span class="skill-chip">Python</span>
        <span class="skill-chip">MySQL</span>
        <span class="skill-chip">HTML</span>
        <span class="skill-chip">CSS</span>
        <span class="skill-chip">JavaScript</span>
        <span class="skill-chip">PHP</span>
        <span class="skill-chip">Vue JS</span>
        <span class="skill-chip">Nuxt JS</span>
        <span class="skill-chip">Photoshop</span>
        <span class="skill-chip">Premiere Pro</span>
        <span class="skill-chip">After Effects</span>
        <span class="skill-chip">XD</span>
        <span class="skill-chip">Illustrator</span>
        <span class="skill-chip">Blender</span>
      </div>
    </div>

    <hr class="border-gray-200" />
  </div>
</template>

<style scoped>
.skill-chip {
  @apply px-3 py-1 m-2 rounded-full bg-gray-200 text-gray-700 text-sm;
}
</style>
