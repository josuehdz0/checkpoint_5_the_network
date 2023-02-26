export class Profile {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.graduated = data.graduated
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.bio = data.bio

  }
}

export class Account extends Profile{
  constructor(data){
    super(data)
    this.email = data.email
    
  }
}
