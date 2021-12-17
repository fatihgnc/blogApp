class User {
  id: string;
  username: string;
  password: string;
  authToken: string;

  constructor(
    username: string,
    password: string,
    id: string,
    authToken: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.authToken = authToken;
  }
}

export default User;
