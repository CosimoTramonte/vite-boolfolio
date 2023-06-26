
<script>
import { store } from './store/store.js';
import axios from 'axios';

export default {

  data(){
    return{
      projects:[],
    }
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
          .then(result=>{
            this.projects = result.data;
            console.log(this.projects);
          })
    }
  },

  mounted(){
    this.getApi();
  }
}
</script>

<template>
    
    <div class="container">
      <h1>Projects List</h1>
    </div>

</template>

<style>

</style>
