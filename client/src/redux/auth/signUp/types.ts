export type User = {
  email:string;
  firstName:string;
  password:string;
  img?:string;
}

export type AuthError = {
  message: string
}

export interface SignUp  { 
  isLoading: boolean;
  isAuth:boolean;
  currentUser?:User
  error:AuthError
}

