<template>
  <div v-if="profile" class="container-fluid">
    <div class="row">
      <div class="col-md-7">
        profile details
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
        
      } catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(()=>{
      getProfileById();
    });

    onUnmounted(() => {
      
    })
    return {
      profile: computed(()=> AppState.profile),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>