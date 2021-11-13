<template>
    <div class="root-div ">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 sign-up mt-5 pt-5 bg-white">
                  <h1 >Sign Up</h1>
                  <form @submit.prevent="submitForm()">
                    <div class="form-group mt-5">
                       <input type="text" class="form-control form-control-lg" placeholder="Enter full name" v-model="formData.fName"
                       @blur="$v.formData.fName.$touch"/>
                       <template v-if="$v.formData.fName.$error">
                           <!-- if required fullname is not true  -->
                        <span  v-if="!$v.formData.fName.required" class="text-danger">Full Name is required*</span>
                       </template>
                   </div>
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
                   <div class="form-group mt-5">
                       <input type="password" class="form-control form-control-lg" placeholder="Confirm password" v-model="formData.c_pwrd"
                      @blur="$v.formData.c_pwrd.$touch"/>
                       <template v-if="$v.formData.c_pwrd.$error">
                           <span class="text-danger" v-if="!$v.formData.c_pwrd.checkPassword">Password Mismatch*</span>
                       </template>
                   </div>
                   <div class="my-5">
                       <button class="btn btn-info" :disabled="$v.formData.$invalid">Signup</button>
                       <p class="text-danger" v-if="$v.formData.$anyError">Please fill out the required fields*</p>
                   </div>
                   <div class="text-right">
                       <p>Already Registered
                        <router-link :to="{name: 'Signin'}" class="link">Sign in?</router-link>
                       </p>
                   </div>
                  </form>
              </div>
              <div class="col-md-3"></div>
          </div>
      </div>
    </div>
    <!-- <router-view/> -->
</template>

<script>
import { required, email, sameAs, minLength, maxLength} from 'vuelidate/lib/validators'
import axios from 'axios'
// const baseUrl = ''
    export default {
        name: 'Signup',
        data(){
            return{
                formData:{
                    fName: '',
                    email: '',
                    pwrd: '',
                    c_pwrd: ''
                }
            }
        },
        validations:{
            formData:{
                fName: {required},
                email: {required, email},
                // pwrd: {required, between: between(5, 12)},
                pwrd: {required, minLength: minLength(5), maxLength: maxLength(12)},
                c_pwrd: {required, checkPassword: sameAs('pwrd')}
            }
        },
        methods:{
           async submitForm(){
                this.$v.$touch()  //sets dirty flag to true on every field

                if(!this.$v.invalid){
                     console.log('Form Submitted: ', this.formData);
                     await axios.post('register', this.formData);
                // .then(
                //     res =>{
                //         console.log(res)
                //     }
                // ) .catch(
                //     err=>{
                //         console.log(err)
                //     }
                // )
                // console.log(response);
                this.$router.push('/Signin');
                }else{
                    console.log('Form not Submitted')
                }
            }
        }
    }
</script>

<style lang="css" >
    input{
       border: 0;
       border-bottom: 2px solid #ddd;
       border-radius: 10px;
   }

   input:focus{
       box-shadow: none;
       outline: none;
       border-bottom: 2px solid rgb(16, 149, 167);
   }
</style>