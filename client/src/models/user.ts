export class User {
  _id: string;
  username: string;
  password: string;
  blogCount: number;
  exp: number;

  constructor(
    _id: string,
    username: string,
    password: string,
    blogCount: number,
    exp: number
  ) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.blogCount = blogCount;
    this.exp = exp;
  }
}
