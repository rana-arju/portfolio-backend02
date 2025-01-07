/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  status: 'in-progress' | 'blocked';
  role:  'superAdmin';
  isDeleted: boolean;
}
export interface UserModel extends Model<IUser> {
  isPasswordMatched(
    plainTextpassword: string,
    hashPassword: string,
  ): Promise<boolean>;
 
}
