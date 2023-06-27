
<script>
import { store } from './store/store.js';
import axios from 'axios';
import CardContainer from './components/CardContainer.vue';

export default {
  name: "App",
  components:{
    CardContainer
  }
}
</script>

<template>
  
  <router-view></router-view>
  <CardContainer/> 

</template>

<style lang="scss">
  @use "./scss/main.scss";


</style>
