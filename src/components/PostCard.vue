<template>
        <div class="border border-dark">
          <div class="row">
            <div class="col-2">
              <img :src="post.creator.picture" :alt="post.creator.name" class="profile-picture"
          :title="`Go to your {{post.creator.name}} page!`">
            </div>
            <div class="col-5 d-flex align-items-center">
              <div class="row">
                <div> {{post.creator.name}} </div> 
              </div>
              <div class="row">
                <p>graduated</p>
              </div>
            

            </div>
            <!-- <img :src="post.creator.picture" :alt="post.creator.name" class="profile-picture"
          :title="`Go to ${post.creator.name}'s profile page!`"> -->
          </div>
          <div class="row">
            <p>
              {{post.body}}
            </p>
          </div>
          <div class="row">
            <img :src="post.imgUrl" alt="">
          </div>
        </div>
</template>


<script>
import { Post } from "../models/Post.js";

export default {
  props:{
    post:{
      type: Post,
      required: true
    }
  },
  setup(){
    return {}
  },
  
}
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  // box-shadow: 2px 2px 4px black;
}
</style>