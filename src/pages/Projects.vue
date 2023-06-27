<script>
import CardContainer from '../components/CardContainer.vue';

export default {
    name:"Projects",
    components:{
        CardContainer
    }
}
</script>

<template>
    <div class="page-wrapper">
        <h1>Projects List</h1>
        <CardContainer/>
    </div>
</template>


<style lang="scss" scoped>
  @use "../scss/main.scss";

</style>