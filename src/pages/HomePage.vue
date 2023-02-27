<template>
  <!-- NOTE complete page only loads if all content is ready. Else, loading component -->
  <div v-if="posts.length && account.id" class="container-fluid">
    <!-- NOTE PostForm only shows up if account is signed in -->
    <div  v-if="account.id && posts.length" class="row my-3 justify-content-center justify-content-md-end"> 
      <div class="col-md-8  col-11 mb-3 ">
        <PostForm/>
      </div>
    </div>


    
    <!-- NOTE PostCard Template here -->
    <div class="row my-3 justify-content-center justify-content-md-end"> 
      <div v-for="p in posts" class="col-md-8 col-11 mb-3" >
        <PostCard :post="p"/>
      </div>
    </div>

    <!-- NOTE Pagination functionality -->
        <div class="row justify-content-center my-3 justify-content-md-end">
          <div class="col-md-8">
            <div class="row">

              <div class="col-md-6 col-6 d-flex justify-content-center">
                <button class="btn btn-outline-dark w-100" :disabled="!previousPage" @click="changePage(previousPage)"> Previous</button>
              </div>
              <div class="col-md-6 col-6 d-flex justify-content-center">
                <button class="btn btn-outline-dark w-100" :disabled="!nextPage" @click="changePage(nextPage)" aria-label="Previous" >Next</button>
              </div>

            </div>
          </div>
          </div>


  </div>
  <div v-else class="container-fluid">
    <LoadingBoy />
  </div>
  
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js"
import PostCard from "../components/PostCard.vue";
import PostForm from "../components/PostForm.vue";

export default {
  setup() {
    async function getPosts(){
      try {
        await postsService.getPosts()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message);
      }
    }
    
   

    onMounted(()=>{
      getPosts()
    })
    return {
      posts: computed(()=> AppState.posts),
      profile: computed(() => AppState.profile),
      account: computed(()=> AppState.account),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),


      async changePage(url){
      try {
        await postsService.changePage(url)
      } catch (error) {
        Pop.error('ERROR', error.message)
      }
    }
    };
  },
  components: { PostCard, PostForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
