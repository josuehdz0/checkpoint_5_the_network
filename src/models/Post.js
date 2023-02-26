import { Profile } from "./Account.js"

export class Post{
  constructor(data){
    this.id = data.id || null
    this.body = data.body
    this.imgUrl = data.imgUrl || null
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = new Profile(data.creator)
    this.createdAt = new Date(data.createdAt)
  }
  
  get timeAgo() {
    const now = new Date();
    const diffMs = now - this.createdAt;
    const diffDays = Math.floor(diffMs / 86400000); // 1000 * 60 * 60 * 24 = 86400000 (milliseconds in a day)
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // 1000 * 60 * 60 = 3600000
    const diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // 1000 * 60 = 60000
    
    if (diffDays > 7) {
      return this.createdAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    } else if (diffDays > 0) {
      return `${diffDays}d`;
    } else if (diffHrs > 0) {
      return `${diffHrs}h`;
    } else if (diffMins > 0) {
      return `${diffMins}min`;
    } else {
      return "just now";
    }
  }
}