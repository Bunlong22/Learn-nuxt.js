<template>
  <v-container>
    <!-- <v-layout> -->
      <!-- if neeed to change dynamic layout of UI this is the part of code to change -->
    <h1 class="display-1 text-xs-center">Weather App</h1>
    <v-flex xs12>
      <v-card color="dark darken-2" dark>
        <v-card-text>
          <v-layout justify-center>
            <v-flex  xs4 class="text-xs-center">
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="weather icon" />
              <p>
                <span class="display-1">{{ temp() }} &deg;C</span>
                <span class="caption ml-4">{{
                  weather.weather[0].description
                }}</span>
              </p>
            </v-flex>
            <v-flex  xs4 class="text-xs-center">
              <h4>Wind & Pressure:</h4>
              <h3 class="headline">
                Wind: {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}
                &deg;)
              </h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }} %
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hPa
              </h3>
            </v-flex>
            <v-flex  xs4 class="text-xs-center">
              <h4>Other:</h4>
              <h3 class="headline mt-4">
                Max Temperature:
                {{ Math.round(weather.main.temp_max - 273) }} &deg; C
              </h3>
              <h3 class="headline mt-4">
                Min Temperature:
                {{ Math.round(weather.main.temp_min - 273) }} &deg; C
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          label="Enter City Name"
          solo
        ></v-text-field>
      </v-form>
    </v-flex>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  // intergrate , and config api for ssr and ajax meaning that 
  // if api is error or need to config api this is the part to change

  data() {
    return {
      city: 'London',
    }
  },
  computed: {
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  asyncData({ params, $axios }) {
    return $axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=603639e206d8b0a420855297f9304e57`
      )
      .then(res => {
        return { weather: res }
      })
  },
  methods: {
    getWeatherInfo() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            this.city
          }&appid=603639e206d8b0a420855297f9304e57`
        )
        .then(res => (this.weather = res))
    },
    temp() {
      return this.weather.main ? Math.round(this.weather.main.temp - 273) : ''
    }
  }
}
</script>

<style></style>