
<script>
export default {
    name: 'ProjectCrad',
    props:{
        name: String,
        slug: String,
        type: String,
        kind: String,
        technologies: Array,
    }
    
}
</script>

<template>

<div class="card text-bg-light border-dark  mb-3" style="width: 18rem;">
  <!--<img src="..." class="card-img-top" alt="...">-->
  <div class="card-body">
    <h5 class="card-title text-center">{{name}}</h5>
    <p class="card-text">Type -> {{ type }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <span class="pe-4">Kind of work:</span>
        <span class="badge text-bg-primary">{{ kind }}</span>
    </li>
    <li class="list-group-item">
        <span class="me-3">Technologies used:</span>
        <span v-for="(name,index) in technologies" :key="index">
            <i class="fa-brands" :class="'fa-' + name.name"></i>
        </span>
    </li>
  </ul>
  <div class="d-flex justify-content-center m-2">
    <router-link class="btn btn-dark" :to="{ name: 'DetailProject', params:{ slug: slug }}">Details</router-link>
  </div>
</div>
  
</template>

<style lang="scss" scoped>

.card{
    margin: 20px 10px 0px 10px;

    i{
        font-size: 30px !important;
        padding-right: 10px;
    }
}

</style>