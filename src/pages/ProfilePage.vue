<template>
  <div v-if="profile" class="container-fluid mt-4">
    <div class="row justify-content-center">
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
    </div>
  </div>
</template>


<script>
import { onMounted, computed,  } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { profilesService } from "../services/ProfilesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup(){
    const route = useRoute();
    async function getProfileById(){
      try {
        const profileId = route.params.profileId;
        logger.log('here is the profile id', profileId)
        await profilesService.getProfileById(profileId)
      } 
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(()=>{
      getProfileById();
    });

    return {
      profile: computed(()=> AppState.profile),
      posts: computed(() => AppState.posts)
    }
  }
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