<template>
  <div class="container-fluid">
    <div class="row my-3 justify-content-center "> 
      <div class="col-md-7 mb-3 ">
        <div class="border border-dark">
          <div class="row">
            <div class="col-md-3">
              <h2>userimage</h2>
            </div>
            <div class="col-md-9">
              <form> 
              <div class="row">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="row justify-content-between">
                    <div class="col-4">Add Photo</div>
                    <div class="col-2"><button type="post" class="btn btn-primary">post</button></div>
                  </div>
                </form>
              </div>
          </div>

        </div>
        
        

      </div>
    </div>

    <div class="row my-3 justify-content-center"> 
      <div v-for="p in posts" class="col-md-7 mb-3" >
        <PostCard :post="p"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js"
import PostCard from "../components/PostCard.vue";

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
      posts: computed(()=> AppState.posts)
    };
  },
  components: {PostCard}
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
