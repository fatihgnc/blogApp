import * as jspb from 'google-protobuf'



export class UserInfo extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class SignInAndUpResponse extends jspb.Message {
  getAuthtoken(): string;
  setAuthtoken(value: string): SignInAndUpResponse;

  getErrormessage(): string;
  setErrormessage(value: string): SignInAndUpResponse;

  getResponseCase(): SignInAndUpResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInAndUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInAndUpResponse): SignInAndUpResponse.AsObject;
  static serializeBinaryToWriter(message: SignInAndUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInAndUpResponse;
  static deserializeBinaryFromReader(message: SignInAndUpResponse, reader: jspb.BinaryReader): SignInAndUpResponse;
}

export namespace SignInAndUpResponse {
  export type AsObject = {
    authtoken: string,
    errormessage: string,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    AUTHTOKEN = 1,
    ERRORMESSAGE = 2,
  }
}

export class Token extends jspb.Message {
  getAuthtoken(): string;
  setAuthtoken(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    authtoken: string,
  }
}

export class Blog extends jspb.Message {
  getBlogtitle(): string;
  setBlogtitle(value: string): Blog;

  getBlogcontent(): string;
  setBlogcontent(value: string): Blog;

  getAuthorusername(): string;
  setAuthorusername(value: string): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    blogtitle: string,
    blogcontent: string,
    authorusername: string,
  }
}

export class Blogs extends jspb.Message {
  getBlogsList(): Array<Blog>;
  setBlogsList(value: Array<Blog>): Blogs;
  clearBlogsList(): Blogs;
  addBlogs(value?: Blog, index?: number): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blogs.AsObject;
  static toObject(includeInstance: boolean, msg: Blogs): Blogs.AsObject;
  static serializeBinaryToWriter(message: Blogs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blogs;
  static deserializeBinaryFromReader(message: Blogs, reader: jspb.BinaryReader): Blogs;
}

export namespace Blogs {
  export type AsObject = {
    blogsList: Array<Blog.AsObject>,
  }
}

export class InsertBlogRequest extends jspb.Message {
  getAuthorid(): string;
  setAuthorid(value: string): InsertBlogRequest;

  getBlogtitle(): string;
  setBlogtitle(value: string): InsertBlogRequest;

  getBlogcontent(): string;
  setBlogcontent(value: string): InsertBlogRequest;

  getAuthtoken(): string;
  setAuthtoken(value: string): InsertBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertBlogRequest): InsertBlogRequest.AsObject;
  static serializeBinaryToWriter(message: InsertBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertBlogRequest;
  static deserializeBinaryFromReader(message: InsertBlogRequest, reader: jspb.BinaryReader): InsertBlogRequest;
}

export namespace InsertBlogRequest {
  export type AsObject = {
    authorid: string,
    blogtitle: string,
    blogcontent: string,
    authtoken: string,
  }
}

