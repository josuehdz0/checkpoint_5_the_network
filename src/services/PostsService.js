import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService{
async getPosts(){
  const res = await api.get('api/posts')
  logger.log('getting posts?', res.data)
  AppState.posts = res.data.posts.map(p => new Post(p))
}

async createPost(postData){
  const res = await api.post('api/posts', postData)
  console.log('making post?', res.data);
  AppState.posts.unshift(res.data)
}

async getPostByQuery(query){
  const res = await api.get('api/posts',{params: query})
  logger.log('getting post by profile', res.data.posts)
  AppState.posts = res.data.posts.map(p => new Post(p))
}

async changePage(url){
  const res = await api.get(url)
  logger.log('Change Page', res.data)
  AppState.nextPage = res.data.next
  AppState.previousPage = res.data.previous
  AppState.posts = res.data.posts
}

clearPosts(){
  AppState.posts = []
}

}

export const postsService = new PostsService()