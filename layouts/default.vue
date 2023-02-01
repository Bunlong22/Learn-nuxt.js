<template>
  <v-app>
    <v-content>
      <v-toolbar color="green" dark>
        <v-toolbar-title>
          <n-link to="/" class="white--text">
            Learning Nuxt
          </n-link>
          </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <n-link to="/weather-app" class="white--text">Weather App</n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <v-content>
          <nuxt />
        </v-content>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>