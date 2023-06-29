
<script>
import { store } from '../store/store';
import axios from 'axios';

export default {
    name:'ContactForm',
    data(){
        return{
            name: '',
            email: '',
            message: '',
            errors: {},
            sending: false,
            success: false
        }
    },

    methods:{
        sendForm(){
            this.sending = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios.post(store.apiUrl + 'contacts', data)
                .then(result =>{
                    this.sending = false;
                    this.success = result.data.success; 

                    if(!result.data.success){
                        this.errors = result.data.errors;
                    }else{
                        this.errors = {};
                    }
                });
        }
    }
}
</script>

<template>

    <form v-if="!success" @submit.prevent="sendForm()">
        <div class="w-100 py-3">
            <input 
            v-model.trim="name" 
            type="text" 
            class="form-control" 
            :class="{'is-invalid': errors.name}"
            placeholder="Name">
            <p 
            class="text-danger" 
            v-for="(error,index) in errors.name" :key="index">{{ error }}</p>
        </div>
        <div class="w-100 py-3">
            <input 
            v-model.trim="email" 
            type="email" 
            class="form-control" 
            :class="{'is-invalid': errors.email}"
            placeholder="Email">
            <p 
            class="text-danger" 
            v-for="(error,index) in errors.email" :key="index">{{ error }}</p>
        </div>
        <div class="w-100 py-3">
            <textarea 
            v-model.trim="message" 
            class=" form-control w-100" 
            :class="{'is-invalid': errors.message}"
            cols="30" 
            rows="10" 
            placeholder="Message"></textarea>
            <p 
            class="text-danger" 
            v-for="(error,index) in errors.message" :key="index">{{ error }}</p>
        </div>
        <button type="submit" :disabled="sending" class="btn btn-primary">{{ sending ? 'Invio in corso' : 'Invia' }}</button>
    </form>

    <div v-else>
        <h2 class="text-success py-2">Form inviato correttamente<i class="fa-solid fa-check ps-3" style="color: #198754;"></i></h2>
    </div>
  
</template>

<style lang="scss" scoped>

</style>