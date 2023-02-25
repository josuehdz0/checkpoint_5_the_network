<template>
        <div class="border border-dark">
          <div class="row">
            <!-- <img :src="post.creator.picture" :alt="post.creator.name" class="profile-picture"
          :title="`Go to ${post.creator.name}'s profile page!`"> -->
          <div class="mdi mdi-account"> {{post.creator.name}} </div> 
          <p>graduated</p>
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

</style>