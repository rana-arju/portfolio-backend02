/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
  name?: string
  email: string;
  password: string;
  role: 'superAdmin' | 'user' | 'admin';
}
export interface UserModel extends Model<IUser> {
  isPasswordMatched(
    plainTextpassword: string,
    hashPassword: string,
  ): Promise<boolean>;
}
