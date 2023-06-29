
<script>
export default {
    name:'ContactForm',
    data(){
        return{
            name: '',
            email: '',
            message: '',
        }
    },

    methods:{
        sendForm(){
            const $data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            console.log($data);
        }
    }
}
</script>

<template>

    <form @submit.prevent="sendForm()">
        <div class="w-100 py-3">
            <input v-model.trim="name" type="text" class="form-control" placeholder="Name">
        </div>
        <div class="w-100 py-3">
            <input v-model.trim="email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="w-100 py-3">
            <textarea v-model.trim="message" class=" form-control w-100" cols="30" rows="10" placeholder="Message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
    </form>
  
</template>

<style lang="scss" scoped>

</style>