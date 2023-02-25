<template>
  <div v-if="posts.length" class="container-fluid">
    <!-- NOTE add this to the row later so only users can post v-if="profile" -->
    <div  class="row my-3 justify-content-center"> 
      <div class="col-md-7 mb-3 ">
        <PostForm/>
      </div>
    </div>

    <!-- NOTE PostCard Template here -->
    <div class="row my-3 justify-content-center"> 
      <div v-for="p in posts" class="col-md-7 mb-3" >
        <PostCard :post="p"/>
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
      profile: computed(() => AppState.profile)
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
