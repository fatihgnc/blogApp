import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getAuthtoken(): string;
  setAuthtoken(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    username: string,
    password: string,
    authtoken: string,
  }
}

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
  getUser(): User | undefined;
  setUser(value?: User): SignInAndUpResponse;
  hasUser(): boolean;
  clearUser(): SignInAndUpResponse;

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
    user?: User.AsObject,
    errormessage: string,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    USER = 1,
    ERRORMESSAGE = 2,
  }
}

export class InsertBlogResponse extends jspb.Message {
  getIssuccessful(): boolean;
  setIssuccessful(value: boolean): InsertBlogResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InsertBlogResponse): InsertBlogResponse.AsObject;
  static serializeBinaryToWriter(message: InsertBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertBlogResponse;
  static deserializeBinaryFromReader(message: InsertBlogResponse, reader: jspb.BinaryReader): InsertBlogResponse;
}

export namespace InsertBlogResponse {
  export type AsObject = {
    issuccessful: boolean,
  }
}

export class InsertBlogRequest extends jspb.Message {
  getAuthorid(): number;
  setAuthorid(value: number): InsertBlogRequest;

  getBlogtitle(): string;
  setBlogtitle(value: string): InsertBlogRequest;

  getBlogcontent(): string;
  setBlogcontent(value: string): InsertBlogRequest;

  getCreationtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationtime(value?: google_protobuf_timestamp_pb.Timestamp): InsertBlogRequest;
  hasCreationtime(): boolean;
  clearCreationtime(): InsertBlogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertBlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertBlogRequest): InsertBlogRequest.AsObject;
  static serializeBinaryToWriter(message: InsertBlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertBlogRequest;
  static deserializeBinaryFromReader(message: InsertBlogRequest, reader: jspb.BinaryReader): InsertBlogRequest;
}

export namespace InsertBlogRequest {
  export type AsObject = {
    authorid: number,
    blogtitle: string,
    blogcontent: string,
    creationtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

