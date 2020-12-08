export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  [key: string]: any;
}


export enum UserType{
  client=1,
  coach=0,
};
