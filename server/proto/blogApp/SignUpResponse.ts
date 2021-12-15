// Original file: blogService.proto

import type { User as _blogApp_User, User__Output as _blogApp_User__Output } from '../blogApp/User';

export interface SignUpResponse {
  'user'?: (_blogApp_User | null);
  'errorMessage'?: (string);
  'response'?: "user"|"errorMessage";
}

export interface SignUpResponse__Output {
  'user'?: (_blogApp_User__Output);
  'errorMessage'?: (string);
}
