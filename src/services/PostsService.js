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

async createPost(postData){
  const res = await api.post('api/posts', postData)
  console.log('making post?', res.data);
  AppState.posts.push(res.data)
}

}

export const postsService = new PostsService()