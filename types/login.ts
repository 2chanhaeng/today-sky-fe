export interface Tokens {
  access: string;
  refresh: string;
}

export interface Userinfo {
  username: string;
  password: string;
}
export interface LoginInputs extends Userinfo {
  keep?: boolean;
}

export interface LoginOptions {
  redirect?: string;
}
