import { Profile } from "./Account.js"

export class Post{
  constructor(data){
    this.id = data.id || null
    this.body = data.body
    this.imgUrl = data.imgUrl || null
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = new Profile(data.creator)
  
  }
}