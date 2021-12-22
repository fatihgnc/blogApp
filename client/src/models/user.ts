class User {
  _id: string;
  username: string;
  password: string;
  blogCount: number;
  // blogs: Blog[];

  constructor(
    _id: string,
    username: string,
    password: string,
    blogCount: number
    // blogs: Blog[],
  ) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.blogCount = blogCount;
    // this.blogs = blogs;
  }
}

export default User;
