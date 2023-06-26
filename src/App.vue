
<script>
import { store } from './store/store.js';
import axios from 'axios';
import ProjectCardVue from './components/ProjectCard.vue';

export default {

  components:{
    ProjectCardVue
  },

  data(){
    return{
      projects:[],
      links:[],
      first_page: null,
      last_page: null,
      current_page: null,
      last_page:null
    }
  },

  methods:{
    getApi(endpoint){
      axios.get(endpoint)
          .then(result=>{
            this.projects = result.data.data;
            this.links = result.data.links;
            this.first_page = result.data.first_page_url;
            this.last_page = result.data.last_page_url;
            this.current_page = result.data.current_page;
            this.last_page = result.data.last_page;
          })
    }
  },

  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}
</script>

<template>
    
    <div class="container py-5">
      <h1>Projects List</h1>

      <div class="cardContainer py-5">
        <ProjectCardVue
        v-for="(card,index) in projects" :key="index"
        :name="card.name"
        :type="card.type"
        :kind="card.kind.name"
        :technologies="card.technologies"
        />
      </div>

      <div class="d-flex justify-content-center">
        <button 
        @click="getApi(first_page)"
        :disabled="current_page == 1"
        class="btn btn-primary mx-1"
        >First Pgae</button>
        <button 
        v-for="(link,index) in links" :key="index"
        v-html="link.label"
        @click="getApi(link.url)"
        :disabled="link.active || !link.url"
        class="btn btn-primary mx-1"
        ></button>
        <button 
        @click="getApi(last_page)"
        :disabled="current_page == last_page"
        class="btn btn-primary mx-1"
        >Last Page</button>
      </div>

    </div>

</template>

<style lang="scss">
  @use "./scss/main.scss";

  .cardContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

</style>
