<template>
  <div class="containter-fluid">
    <div class="row">
      <div class="about text-center">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        </div>

    </div>
    <div class="row justify-content-center pb-3">
      <div class="col-md-7 col-10">

        <div>
          <form @submit.prevent="handleSubmit">
            <!-- NOTE name -->
            <div class="mb-3">
              <label for="name" class="form-label">name</label>
              <input required type="text" v-model="editable.name" class="form-control" id="name" :placeholder="account.name"
                name="name">
            </div>
            <!-- NOTE image -->
            <div class="mb-3">
              <label for="picture" class="form-label">picture</label>
              <input required type="text" v-model="editable.picture" class="form-control" id="picture" :placeholder="account.picture"
                name="picture">
            </div>
            <!-- NOTE coverimage -->
            <div class="mb-3">
              <label for="coverImg" class="form-label">coverImg</label>
              <input required type="text" v-model="editable.coverImg" class="form-control" id="coverImg" :placeholder="account.coverImg"
                name="coverImg">
            </div>
            <!-- NOTE github-->
            <div class="mb-3">
              <label for="github" class="form-label">github</label>
              <input required type="text" v-model="editable.github" class="form-control" id="github" :placeholder="account.github"
                name="github">
            </div>
            <!-- NOTE linkedin-->
            <div class="mb-3">
              <label for="linkedin" class="form-label">linkedin</label>
              <input required type="text" v-model="editable.linkedin" class="form-control" id="linkedin" :placeholder="account.linkedin"
                name="linkedin">
            </div>
            <!-- NOTE resume-->
            <div class="mb-3">
              <label for="resume" class="form-label">resume</label>
              <input required type="text" v-model="editable.resume" class="form-control" id="resume" :placeholder="account.resume"
                name="resume">
            </div>
            <!-- NOTE class-->
            <div class="mb-3">
              <label for="class" class="form-label">class</label>
              <input required type="text" v-model="editable.class" class="form-control" id="class" :placeholder="account.class"
                name="class">
            </div>
            <!-- NOTE bio-->
            <div class="mb-3">
              <label for="bio" class="form-label">bio</label>
              <input required type="text" v-model="editable.bio" class="form-control" id="bio" :placeholder="account.bio"
                name="bio">
            </div>
        
            <div>
              <button type="submit" class="btn btn-primary">
                {{ editable.profile }} Save changes
              </button>
            </div>
          </form>
        
        
        </div>

      </div>
    </div>
  </div>
 
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { profilesService } from "../services/ProfilesService.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),

      async handleSubmit(){
        try {
          
          await profilesService.editProfile(editable.value)
          editable.value = {}
        } catch (error) {
          Pop.error(error, 'Editing Profile')
        }

      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
