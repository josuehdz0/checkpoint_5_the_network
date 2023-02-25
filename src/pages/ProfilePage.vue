<template>
  <div v-if="profile" class="container-fluid mt-4">
    <div class="row justify-content-center">
      <!-- NOTE Profile Details Component here -->
      <div class="col-md-7 border border-dark">
        <div class="row justify-content-center">
          <img :src="profile.coverImg" :alt="profile.name" class="p-0">
          
        </div>
        <div class="row justify-content-between">
          <div class="col-3"> 
            <img :src="profile.picture" :alt="profile.name" class="profile-picture p-0">
          </div>
          <div class="col-3 p-0">
            <div class="row">
              <div class="col-4 p-0 m-0">linkdin</div>
              <div class="col-4 p-0 m-0">github</div>
              <div class="col-4 p-0 m-0">resume</div>
            </div>
          </div>
        </div>
        <div class="row">{{profile.createdAt}}</div>
        <div class="row"><h1>{{profile.name}}</h1></div>
        <div class="row"> <p> {{profile.bio}}</p></div>
      </div>

      <!-- NOTE Insert PostForm, BUT only if your on your own page -->
      <div class="row my-3 justify-content-center"> 
        <div  v-if="account.id == profile.id" class="col-md-7 mb-3 ">
          <PostForm/>
        </div>
      </div>

      <!-- NOTE  -->
      <div class="row my-3 justify-content-center"> 
      <div v-for="p in posts" class="col-md-7 mb-3" >
        <PostCard :post="p"/>
      </div>
    </div>
    </div>
  </div>
  <div v-else class="container-fluid">
    <LoadingBoy />
  </div>
</template>


<script>
import { onMounted, computed, onUnmounted  } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";
import PostForm from "../components/PostForm.vue";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                logger.log("here is the profile id", profileId);
                await profilesService.getProfileById(profileId);
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }
        async function getPostByCreatorId() {
            try {
                const profileId = route.params.profileId;
                await postsService.getPostByQuery({ creatorId: profileId });
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getProfileById();
            getPostByCreatorId();
        });

        onUnmounted(() => {
          profilesService.clearProfile()
          postsService.clearPosts()
        })
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            account: computed(()=> AppState.account)
        };
    },
    components: { PostCard, PostForm }
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