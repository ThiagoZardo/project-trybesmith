export interface User {
  id?: number;
  username: string;
  classe: number;
  level: number;
  password: string;
}

export interface UserPasswordHiden {
  id?: number;
  username: string;
  classe: number;
  level: number;
}