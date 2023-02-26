<template>
        <div class="border border-dark">
          <div class="row ">
            <div class="col-3">
              <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
                <img :src="post.creator.picture" alt="test" class="profile-picture"
            :title="`Go to ${post.creator.name}'s' profile page`">
              </router-link>
            </div>
            <div class="col-5 mt-3">
              <h5> {{post.creator.name}} </h5> 
            </div>
          </div>
            
          <div class="row">
            <!-- NOTE Graduation icon only shows next to profiles that have graduated -->
            <div class="col-3 d-flex justify-content-center">
              <h5> {{ post.timeAgo }} </h5>
            </div>
            <div class="col-3">
              <h5 v-if="post.creator.graduated">
                <div class="mdi mdi-school"></div>
              </h5>
              
            </div>
          </div>
          <div class="row">
            <p>
              {{post.body}}
            </p>
          </div>
          <div class="row">
            <img :src="post.imgUrl" alt="">
          </div>
          <div class="row justify-content-end">
            <h5 class="text-end">
             <i class="mdi mdi-heart-outline"></i> {{post.likes.length}}
            </h5>
          </div>

        </div>
</template>


<script>
import { RouterLink } from "vue-router";
import { Post } from "../models/Post.js";

export default {
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    setup() {
        return {};
    },
    components: { RouterLink }
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