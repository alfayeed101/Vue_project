<template>
    <div class="root-div">
      <div class="container">
         <div class="row">
             <div class="col-md-3"></div>
             <div class="col-md-6 sign-up mt-5 pt-5 bg-white">
                <h1>Sign In</h1>
                <form @submit.prevent="submitForm()">
                    <div class="form-group mt-5">
                       <input type="email" class="form-control form-control-lg" placeholder="Enter valid email" v-model="formData.email"
                       @blur="$v.formData.email.$touch" :class="{error: $v.formData.email.$error}"/>
                       <template v-if="$v.formData.email.$error">
                           <span class="text-danger" v-if="!$v.formData.email.required">Email is required*</span>
                           <span class="text-danger" v-if="!$v.formData.email.email">Enter a valid email address*</span>
                       </template>
                   </div>
                   <div class="form-group mt-5">
                       <input type="password" class="form-control form-control-lg" placeholder="Enter password" v-model="formData.pwrd"
                       @blur="$v.formData.pwrd.$touch"/>
                       <template v-if="$v.formData.pwrd.$error">
                           <span class="text-danger" v-if="!$v.formData.pwrd.required">Password is required*</span>
                           <!-- <span class="text-danger" v-if="!$v.formData.pwrd.between">Password should be between {{$v.formData.pwrd.$params.between.min}} and {{$v.formData.pwrd.$params.between.max}} characters*</span> -->
                           <span class="text-danger" v-if="!$v.formData.pwrd.minLength">Password should be between{{$v.formData.pwrd.$params.minLength.min}} & {{$v.formData.pwrd.$params.maxLength.max}}characters*</span>
                       </template>
                   </div>
                    <div class="my-5">
                       <button class="btn btn-info" :disabled="$v.formData.$invalid">Signin</button>
                       <!-- <p class="text-danger" v-if="$v.formData.$anyError">Please fill out the required fields*</p> -->
                   </div>
                   <div>
                       <p>
                           <!-- <router-link>Forgot Password?</router-link> -->
                       </p>
                   </div>
                </form>
             </div>
             <div class="col-md-3"></div>
         </div>
      </div>
    </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
import axios from 'axios'
    export default {
        name: 'Signin',
        data(){
            return{
                formData:{
                    email: '',
                    pwrd: ''
                }
            }
        },
        validations:{
            formData:{
                email: {required, email},
                pwrd: {required}
            }
        },
        methods:{
            async submitForm(){
                const response = await axios.post('signin', this.formData);
                console.log('It works!!!');
                console.log(response);
            }
        }
    }
</script>

<style lang="css" scoped>

</style>