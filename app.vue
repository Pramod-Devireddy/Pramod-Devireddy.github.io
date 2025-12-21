<template>
  <v-app>
    <v-app-bar app flat class="app-bar" :color="appBarColor" :height="mdAndUp ? 75 : 100" dark>
      <v-row align="center" :no-gutters="!mdAndUp">
        <v-col :cols="12" :md="6" :sm="6">
          <h1 :class="mdAndUp ? 'text-left ml-10' : 'text-center mt-5'">
            <NuxtLink to="/" class="hero" :style="{ color: appTitleColor }">
              Pramod Devireddy
            </NuxtLink>
          </h1>
        </v-col>

        <v-col :cols="12" :md="6" :sm="6" :class="mdAndUp ? 'text-right pr-10 pt-3' : 'text-center mb-5'">
          <v-btn :color="appTitleColor" class="nav-button" variant="text" rounded>
            Skills
          </v-btn>

          <v-btn :color="appTitleColor" class="nav-button" variant="text" rounded>
            Projects
          </v-btn>

          <v-btn :color="appTitleColor" :class="['nav-button', { 'v-btn--active': isBlogActive }]" variant="text"
            rounded to="/blog">
            Blog
          </v-btn>

          <v-btn :color="appTitleColor" class="nav-button" variant="text" rounded>
            Contact
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer app class="py-3 footer">
      <v-row no-gutters>
        <v-col :cols="4"></v-col>

        <v-col :cols="12" :md="4" class="text-center">
          <span style="
              font-size: 16px;
              font-weight: 300;
              letter-spacing: 1px;
              line-height: 36px;
            ">
            Copyright &copy; {{ new Date().getFullYear() }} Pramod Devireddy
          </span>
        </v-col>

        <v-col :cols="12" :md="4" :class="mdAndUp ? 'text-right' : 'text-center'">
          <v-btn class="mx-1" icon variant="text" color="#DA5B50" target="_blank"
            href="mailto:devireddy.pramod@gmail.com">
            <v-icon>mdi-gmail</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon variant="text" color="#0077BF" target="_blank"
            href="https://www.linkedin.com/in/pramod-devireddy/">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon variant="text" color="black" target="_blank"
            href="https://github.com/Pramod-Devireddy">
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon variant="text" color="#1A91DA" target="_blank"
            href="https://twitter.com/PramodDevireddy">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon variant="text" color="black" target="_blank" href="https://codepen.io/domarpdev">
            <v-icon>mdi-codepen</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const route = useRoute()
const appBarColor = useState('appBarColor', () => '#FFF')
const appTitleColor = useState('appTitleColor', () => '#000')

const isBlogActive = computed(() => route.path.startsWith('/blog'))
</script>

<style>
html {
  overflow-y: auto;
}

.app-bar {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
}

.hero {
  font-size: 24px;
  font-weight: 300;
  text-decoration: none;
  outline: none;
  color: inherit;
}

.nav-button {
  font-weight: 300 !important;
  font-size: 16px !important;
  text-transform: none !important;
  padding: 0px 5px !important;
  letter-spacing: 0px;
}

.nav-active {
  font-weight: 500 !important;
  text-decoration: underline;
  text-underline-offset: 4px;
}

footer {
  background: #F5F5F5 !important;
}

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
