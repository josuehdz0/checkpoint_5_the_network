<template>
 <div class="col-md-10 p-3 m-3">
  <div class="row justify-object-center">
    <a :href="ad.linkURL" class="d-flex justify-content-center fitad">
      <img :src="ad.tall" :alt="ad.title" class="fitad">
    </a>
  </div>
 </div>
 
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Ad } from "../models/Ad.js";

export default {
  props: {
    ad: {
      type: Ad,
      required: true
    }
  },
  setup(){
    return {

      ads: computed(()=> AppState.ads)
    }
  }
}
</script>


<style lang="scss" scoped>
.fitad{
  height: 35vh ;
object-fit: cover;
}
</style>