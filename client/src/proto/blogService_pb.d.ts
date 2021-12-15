import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BlogInsertionStatus extends jspb.Message {
  getIsadded(): boolean;
  setIsadded(value: boolean): BlogInsertionStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlogInsertionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: BlogInsertionStatus): BlogInsertionStatus.AsObject;
  static serializeBinaryToWriter(message: BlogInsertionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlogInsertionStatus;
  static deserializeBinaryFromReader(message: BlogInsertionStatus, reader: jspb.BinaryReader): BlogInsertionStatus;
}

export namespace BlogInsertionStatus {
  export type AsObject = {
    isadded: boolean,
  }
}

export class Blog extends jspb.Message {
  getAuthorid(): number;
  setAuthorid(value: number): Blog;

  getBlogtitle(): string;
  setBlogtitle(value: string): Blog;

  getBlogcontent(): string;
  setBlogcontent(value: string): Blog;

  getCreationtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationtime(value?: google_protobuf_timestamp_pb.Timestamp): Blog;
  hasCreationtime(): boolean;
  clearCreationtime(): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    authorid: number,
    blogtitle: string,
    blogcontent: string,
    creationtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

