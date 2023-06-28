
<script>
import { store } from '../store/store';
import axios from 'axios';
import ProjectCardVue from './partials/ProjectCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-creative';
import '../style.css';
import 'swiper/css/pagination';
import { EffectCreative, Pagination } from 'swiper';
import LoaderVue from './partials/Loader.vue';

export default {
    name: 'CardContainer',
    components:{
      ProjectCardVue,
      Swiper,
      SwiperSlide,
      LoaderVue
    }, 
    setup() {
      return {
        modules: [EffectCreative, Pagination],
      };
    },
    data(){
    return{
      projects:[],
      links:[],
      first_page: null,
      last_page: null,
      current_page: null,
      last_page_number:null,
      kinds:[],
      technologies:[],
      id_kind: 0,
      id_tech: 0,
      loaded: false
    }
  },

  methods:{
    getApi(endpoint = store.apiUrl + 'projects'){
      this.loaded = false;
      this.id_kind = 0;
      this.id_tech = 0;

      axios.get(endpoint)
          .then(result=>{
            this.projects = result.data.data;
            this.links = result.data.links;
            this.first_page = result.data.first_page_url;
            this.last_page = result.data.last_page_url;
            this.current_page = result.data.current_page;
            this.last_page_number = result.data.last_page;
            this.loaded = true
          })
    },

    getKinds(){
      axios.get(store.apiUrl + 'projects/kinds')
            .then(result =>{
              this.kinds = result.data;
            })
    },

    getProjectsKinds(id){
      this.getApi(store.apiUrl + 'projects/projects-kinds/' + id)
      this.id_kind = id
    },

    getTechnologies(){
      axios.get(store.apiUrl + 'projects/technologies')
            .then(result =>{
              this.technologies = result.data;
            })
    },

    getProjectsTechnologies(id){
      this.getApi(store.apiUrl + 'projects/projects-technologies/' + id)
      this.id_tech = id
    },

  },
 
  mounted(){
    this.getApi();
    this.getKinds();
    this.getTechnologies();
  }
}
</script>

<template>

<div class="container py-5">

  <LoaderVue v-if="!loaded"/>
  
      <div v-else class="wrapper">
        <div class="filterDiv">
          <h5>Filter by Kind of work:</h5>
          <button
          v-for="kind in kinds" :key="kind.id"
          @click="getProjectsKinds(kind.id)"
          :disabled="kind.id == id_kind"
          class="btn btn-dark me-3"
          >{{ kind.name }}</button>

          <h5 class="pt-3">Filter by technologies udes:</h5>
          <button
          v-for="technology in technologies" :key="technology.id"
          @click="getProjectsTechnologies(technology.id)"
          :disabled="technology.id == id_tech"
          class="btn btn-dark me-3"
          ><i class="fa-brands" :class="'fa-' + technology.name"></i></button>

          <h5 class="pt-3">All Projects:</h5>
          <button class="btn btn-dark" @click="getApi()">All</button>
        </div>

        <div class="cardContainer py-5">


          <div class="divAside"></div>

          <swiper
          :grabCursor="true"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              shadow: false,
              translate: ['-120%', 0, -500],
            },
            next: {
              shadow: false,
              translate: ['120%', 0, -500],
            },
          }"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper2"
          >
            <swiper-slide
            v-for="(card,index) in projects" :key="index"
            class="d-flex justify-content-end align-items-start"
            >
              <ProjectCardVue
              :name="card.name"
              :slug="card.slug"
              :type="card.type"
              :kind="card.kind.name"
              :technologies="card.technologies"
              class="w-75"/>
            </swiper-slide>
          </swiper>

        </div>

        <div class="d-flex justify-content-end">
          <button 
          @click="getApi(first_page)"
          :disabled="current_page == 1"
          class="btn btn-warning mx-1"
          >First Page</button>
          <button 
          v-for="(link,index) in links" :key="index"
          v-html="link.label"
          @click="getApi(link.url)"
          :disabled="link.active || !link.url"
          class="btn btn-warning mx-1"
          ></button>
          <button 
          @click="getApi(last_page)"
          :disabled="current_page == last_page_number"
          class="btn btn-warning mx-1"
          >Last Page</button>
        </div>

  </div>
</div>
  
</template>

<style lang="scss" scoped>
  @use "../scss/main.scss";

.cardContainer{
  width: 100%;
  display: flex;

  .divAside{
    width: 100%;
    color: rgb(0, 0, 0);
    background-image:url("/backgroundImg.png");
    background-position: center;
    background-size: cover;
  }

  ProjectCardVue{
      margin: 20px 10px 0px 10px;
  
      i{
          font-size: 30px !important;
          padding-right: 10px;
      }
  }

  .card[data-v-2b10d57c] {
    margin: 10px 10px 100px 10px;
  }

}

</style>