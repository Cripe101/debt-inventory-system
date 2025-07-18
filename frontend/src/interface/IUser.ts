// current logged in user
export interface IUser {
  id: string;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

export interface IUserPost {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  roles: string;
  password: string;
}
