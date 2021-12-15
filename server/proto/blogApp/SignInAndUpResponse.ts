// Original file: blogService.proto

import type { User as _blogApp_User, User__Output as _blogApp_User__Output } from '../blogApp/User';

export interface SignInAndUpResponse {
  'user'?: (_blogApp_User | null);
  'errorMessage'?: (string);
  'response'?: "user"|"errorMessage";
}

export interface SignInAndUpResponse__Output {
  'user'?: (_blogApp_User__Output);
  'errorMessage'?: (string);
}
