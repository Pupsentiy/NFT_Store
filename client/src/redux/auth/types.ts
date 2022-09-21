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
  succes: boolean;
  error: AuthError;
}

export interface AuthTab {
  tabIndex: number;
}

export interface SignIn {
  isLoading: boolean;
  isAuth: boolean;
  error: AuthError;
  userToken:string | null;
}
export type userInfo = { 
  userInfo: object;
  isLoading: boolean;
}