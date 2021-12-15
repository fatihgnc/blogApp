class User {
  id: number;
  username: string;
  password: string;
  authToken: string;

  constructor(
    username: string,
    password: string,
    id: number,
    authToken: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.authToken = authToken;
  }
}

export default User;
