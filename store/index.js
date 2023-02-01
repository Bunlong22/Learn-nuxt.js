// data 
export const state =() => ({
    course: "Learning Nuxt.js"
})
// mutation = data that we need it to get the value from input
  export const mutations = {
    setCourse(state, payload) {
      state.course = payload
    }
  }
  // getter is where u store all functions that need to call again and again
  export const getters = {
    upperCaseCourse(state, getter) {
      return state.course.toUpperCase()
    }
  }