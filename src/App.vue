<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <router-view />
        </div>
        <div class="col-md-3">
          <div v-for="a in ads" class="row">
            <AddCard :ad = "a" />
          </div>
        </div>
      </div>
    </div>
  </main>
   <footer class="bg-dark text-light">
    This app was a pain to make
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import AddCard from "./components/AddCard.vue"
import Navbar from './components/Navbar.vue'
import { adsService } from "./services/AdsService.js"
import Pop from "./utils/Pop.js"

export default {
  setup() {

    async function getAds(){
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.error(error.message)
      }
    }
    onMounted(()=>{
      getAds()
    })
    return {
      appState: computed(() => AppState),
      ads: computed(()=> AppState.ads)
    }
  },
  components: { Navbar, AddCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
