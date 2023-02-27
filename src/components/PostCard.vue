<template>
        <div class="">
          <div class="row  justify-content-between border border-dark">
            <div class="col-8">
              <div class="row">
                <div class="col-lg-3 col-5">
                  <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
                    <img :src="post.creator.picture" alt="test" class="profile-picture"
                :title="`Go to ${post.creator.name}'s' profile page`">
                  </router-link>
                </div>
                <div class="col-5 mt-3">
                  <h5> {{post.creator.name}} </h5> 
                </div>
              </div>
              </div>
              <!-- NOTE edit only shows up on post by user signed in -->
              <div v-if="account.id == post.creatorId" class="col-2 p-2 mb-5" >
                <div class="dropdown text-center">
                  <button class="btn btn-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                    <i class="mdi mdi-dots-horizontal "></i>
                    
                  </button>
                  <ul class="dropdown-menu">
                  <!-- <li><a class="dropdown-item" href="#"> <i class="mdi mdi-pencil-outline "></i> Edit</a></li> -->
                  <li><a class="dropdown-item text-danger" @click="removePost"> <i class="mdi mdi-trash-can-outline "></i> Delete Post</a></li>
                  </ul>
                  </div>
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
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { router } from "../router.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
    props: {
        post: {
            type: Post,
            required: true
        }
    },
    setup(props) {
      const route = useRoute()
        return {

          posts: computed(()=> AppState.posts),
          account: computed(()=> AppState.account),
          
          async removePost(){
            const postId = props.post.id
            logger.log('hello?',postId)
            const yes = await Pop.confirm('Are you sure you want to delete this post?')
            if (!yes) {
              return
            }
            try {
              await postsService.removePost(postId)
            } catch (error) {
              Pop.error(error, 'Removing Post')
            }
          }

        };
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