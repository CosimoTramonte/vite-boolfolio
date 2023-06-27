
<script>
import { store } from './store/store.js';
import axios from 'axios';
import Header from './components/Header.vue';

export default {
  name: "App",
  components:{
    Header
  }
}
</script>

<template>

  <div class="container py-5">
    <Header/>
    <router-view></router-view>
  </div>

</template>

<style lang="scss">
  @use "./scss/main.scss";


</style>
