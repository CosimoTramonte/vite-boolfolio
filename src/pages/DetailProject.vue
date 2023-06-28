<script>
import axios from 'axios';
import { store } from '../store/store';
import LoaderVue from '../components/partials/Loader.vue';

export default {
    name:"DetailProject",

    components:{
        LoaderVue
    },

    data(){
        return{
            project: null,
            loaded:false
        }
    },

    methods:{
        getApi(){
            this.loaded = false;
            axios.get(store.apiUrl + 'projects/' + this.$route.params.slug)
                .then(result =>{
                    this.project = result.data;
                    this.loaded = true;
                })
        },
        formatData(dateString){
          const d = new Date(dateString);
          return d.toLocaleDateString();
        }
    },

    mounted(){
        this.getApi();
    }
}
</script>

<template>
    <div class="page-wrapper">
        
        <div v-if="loaded" class="wrapper">
            <h2>{{ project.name  }}</h2>
            <div>
                <img :src="project.image_path" :alt="project.image_original_name">
            </div>
            <h5 class="mt-3">Type -> {{ project.type }}</h5>
            <div class="mt-3">
                <span class="pe-4">Kind of work:</span>
                <span class="badge text-bg-primary">{{ project.kind.name }}</span>
            </div>
            <div class="my-3">
                <span class="me-3">Technologies used:</span>
                <span v-for="(name,index) in project.technologies" :key="index">
                    <i class="fa-brands" :class="'fa-' + name.name"></i>
                </span>
            </div>
            <span>Description:</span>
            <p v-html="project.description"></p>
            <div>
                <span>Project start date: </span>
                <span>{{ formatData(project.project_start) }}</span>
            </div>
            <div>
                <span>Project end date: </span>
                <span v-if="project.end_of_project">{{ formatData(project.end_of_project) }}</span>
                <span v-if="!project.end_of_project">still to finish</span>
            </div>
            <div>
                <span>Number of collaborators: </span>
                <span>{{ project.number_of_collaborators }}</span>
            </div>
        </div>
        <LoaderVue v-else/>
    </div>
</template>


<style lang="scss" scoped>
    i{
        font-size: 30px !important;
        padding-right: 10px;
    }
</style>