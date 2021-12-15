import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


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

