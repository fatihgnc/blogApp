// Original file: blogService.proto


export interface SignInAndUpResponse {
  'authToken'?: (string);
  'errorMessage'?: (string);
  'response'?: "authToken"|"errorMessage";
}

export interface SignInAndUpResponse__Output {
  'authToken'?: (string);
  'errorMessage'?: (string);
}
