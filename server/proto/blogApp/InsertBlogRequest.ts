// Original file: blogService.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface InsertBlogRequest {
  'authorId'?: (number);
  'blogTitle'?: (string);
  'blogContent'?: (string);
  'creationTime'?: (_google_protobuf_Timestamp | null);
}

export interface InsertBlogRequest__Output {
  'authorId'?: (number);
  'blogTitle'?: (string);
  'blogContent'?: (string);
  'creationTime'?: (_google_protobuf_Timestamp__Output);
}
