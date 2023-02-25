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

  async getPostByQuery(query){
    const res = await api.get('api/posts',{params: query})
    logger.log('getting post by profile', res.data.posts)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }



}
export const profilesService = new ProfilesService()