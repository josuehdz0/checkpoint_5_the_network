<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h3>THE NETWORK</h3>
        <!-- TODO make logo later -->
        <!-- <img alt="logo" src="../assets/img/cw-logo.png" height="45" /> -->
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <div class="d-flex justify-content-end ms-auto">

        <ul class="navbar-nav me-auto my-auto d-flex align-items-center ">
          <!-- <li class="">
            <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase ">
              About
            </router-link>
          </li> -->
        </ul>
        <!-- LOGIN COMPONENT HERE -->
        <Login />
      </div>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  /* padding-top:; */
}

@media screen and (min-width: 769px) {
  nav {
    height: 14vh;
  }

  
}

</style>
