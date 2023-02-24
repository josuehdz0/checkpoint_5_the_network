import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService{
async getPosts(){
  const res = await api.get('api/posts')
  logger.log('getting posts?', res.data.posts)
  AppState.posts = res.data.posts.map(p => new Post(p))
}

}

export const postsService = new PostsService()