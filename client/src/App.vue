<template>
  <div id="app">
    <MainComponent></MainComponent>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
</style>
