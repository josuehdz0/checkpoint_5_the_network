export class Post{
  constructor(data){
    this.body = data.body
    this.imgUrl = data.imgUrl || null
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creatorName = data.creator.name
  }
}