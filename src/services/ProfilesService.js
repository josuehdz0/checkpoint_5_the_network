import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService{

  async getProfileById(profileId){
    const res = await api.get('api/profiles/' + profileId)
    logger.log('getting profile', res.data)
    AppState.profile = new Profile(res.data)
  }


  // FIXME still unable to change pages by profile Id
  async changePageByProfileId(creatorId){
    const res = await api.get(`${creatorId}/posts`)
  logger.log('Change Page in Profile', res.data.older)
  AppState.nextPage = res.data.older
  AppState.previousPage = res.data.newer
  AppState.posts = res.data.posts.map(p => new Post(p))
  logger.log(AppState.posts)
  }

  async getPostsByCreatorId(creatorId) {
    const res = await api.get(`api/profiles/${creatorId}/posts`)
    // logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }

  async editProfile(profileData){
    const res = await api.put('api/account/'+ profileData)
    AppState.profile = res.data

  }

  clearProfile(){
    AppState.profile = null
  }



}
export const profilesService = new ProfilesService()