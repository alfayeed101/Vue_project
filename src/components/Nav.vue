<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand px-2">Vue
        <span class="font-weight-bolder text-info" style="font-size: 40px">_Project</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex justify-content-center">
        <router-link :to="{name: 'Signin'}" class="text-info">Sign In</router-link>
        <router-link :to="{name: 'Signup'}" class="text-info">Sign Up</router-link>
        <!-- <router-view/> -->
        </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
       name: 'Nav' 
    }
</script>

<style lang="css" scoped>

</style>