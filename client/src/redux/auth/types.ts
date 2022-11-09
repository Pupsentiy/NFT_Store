export type signUpUser = {
  email: string;
  firstName: string;
  password: string;
};

export type signInUser = {
  email: string;
  password: string;
};

export type AuthError = {
  message: string;
};

export interface SignUp {
  isLoading: boolean;
  success: boolean;
  error: AuthError;
}

export interface AuthTab {
  tabIndex: number;
}

export interface SignIn {
  isLoading: boolean;
  isAuth: boolean;
  error: AuthError;
}
export interface getProfileInfo  {
  userInfo: userInfo | null;
  isLoading: boolean;
  error:string
}

export type userInfo ={
  id:number;
  firstName:string;
  avatar:string | null;
}