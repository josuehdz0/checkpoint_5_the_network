<template>
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
</template>


<script>
import { ref } from "vue";
import { router } from "../router.js";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup(){
    const editable = ref({})
    return {
      editable,
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

</style>