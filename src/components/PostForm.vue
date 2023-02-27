<template>
   <div class="border border-dark">
      <div class="row">
            <div class="col-md-3">
              <img :src="account.picture" :alt="account.name" class="profile-picture"
          :title="`Go to your profile page!`">
          
            </div>
            <div class="col-md-9">
              <form @submit.prevent="handleSubmit"> 
                <div class="row">
                  <div class="form-group">
                    <label for="body" class="form-label"></label>
                    <textarea required name="body" class="form-control"  v-model="editable.body" placeholder="whats on your mind..." id="body" rows="3">
                    </textarea>
                    </div>
                  </div>
                  <div class="row justify-content-between">
                    <div class="col-4">
                      <label for="img" class=""></label>
                      <input type="text" v-model="editable.imgUrl" class="form-control" id="img" placeholder="img url"
                        name="imgUrl">
                    </div>
                    <div class="col-3 pt-3">
                      <button type="submit" class="btn btn-primary">post</button>
                    </div>
                  </div>
                </form>
              </div>
      </div>
    </div>
</template>


<script>
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { Profile } from "../models/Account.js";
import { Post } from "../models/Post.js";
import { router } from "../router.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { computed } from "@vue/reactivity";

export default {
  
  setup(){
    const editable = ref({})
    return {
      editable,
      account: computed(()=>AppState.account),
      async handleSubmit(){
        try {
          const post = editable.value.id
          ? await postsService.editPost(editable.value)
          : await postsService.createPost(editable.value)

          editable.value = {}
          if (post?.id){
            router.push({name: 'Post', params: {postId: post.id} })
          }
          
        } catch (error) {
          Pop.error(error,'[Posting Post]')
        };
      }
      

    }
  
  }
}
</script>


<style lang="scss" scoped>

.profile-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  // box-shadow: 2px 2px 4px black;
}
</style>