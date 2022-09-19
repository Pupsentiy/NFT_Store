export type signUpUser = {
  email:string;
  firstName:string;
  password:string;
  img?:string;
}

export type signInUser = {
  email:string;
  password:string;
}

export type AuthError = {
  message: string
}

export interface SignUp  { 
  isLoading: boolean;
  succes:boolean;
  currentUser?:signUpUser
  error:AuthError
}

export interface AuthTab {
  tabIndex:number
}

export interface SignIn  { 
  isLoading: boolean;
  isAuth:boolean;
  error:AuthError
}