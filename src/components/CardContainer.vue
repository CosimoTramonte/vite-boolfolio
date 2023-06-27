
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

export default {
    name: 'CardContainer',
    components:{
      ProjectCardVue,
      Swiper,
      SwiperSlide
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
      last_page_number:null
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
            this.last_page_number = result.data.last_page;
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

        <div class="divAside">
        </div>

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
  
</template>

<style lang="scss" scoped>

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