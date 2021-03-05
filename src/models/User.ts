export interface User {
  username: String;
  email: String;
  uid: Number;
  password?: String;
  createdDate: Date;
  authProvider: String;
  providerId: String;
}
