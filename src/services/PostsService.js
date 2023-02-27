import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService{
async getPosts(){
  const res = await api.get('api/posts')
  logger.log('getting posts?', res.data.posts)
  AppState.posts = res.data.posts.map(p => new Post(p))
  AppState.nextPage = res.data.older
  AppState.previousPage = res.data.newer
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
  AppState.nextPage = res.data.older
  AppState.previousPage = res.data.newer
}

async changePage(url){
  const res = await api.get(url)
  logger.log('Change Page', res.data.older)
  AppState.nextPage = res.data.older
  AppState.previousPage = res.data.newer
  AppState.posts = res.data.posts.map(p => new Post(p))
}

async getPostById(postId){
  AppState.post = null
  const res = await api.get('api/post/'+ postId)
  logger.log('hi?')
  AppState.post = new Post(res.data)
}

async removePost(postId){
  const res = await api.delete('api/posts/'+ postId)
  let i = AppState.posts.findIndex(p => p.id == postId)
  if (i != -1){
    AppState.posts.splice(i,1)
  }
}

clearPosts(){
  AppState.posts = []
}

}

export const postsService = new PostsService()