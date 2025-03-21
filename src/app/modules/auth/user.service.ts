import config from '../../config';
import { createToken } from './auth.utils';
import { IUser } from './user.interface';
import { User } from './user.schema';
import bcrypt from 'bcrypt';

const userRegistrationIntoDB = async (payload: IUser) => {
  const userExist = await User.findOne({ email: payload?.email });
  if (userExist) {
    throw new Error('This user already exist');
  }

  const result = await User.create(payload);

  return result;
};
const userLoginIntoDB = async (payload: {
  password: string;
  email: string;
}) => {
  const { password, email } = payload;

  const userExist = await User.findOne({ email }).select('+password');
  if (!userExist) {
    throw new Error("creadentials doesn't match");
  }
  console.log('password', password);

  // Validate password
  const isMatch = await bcrypt.compare(password!, userExist.password);
  console.log(isMatch);
  if (!isMatch) {
    throw new Error("creadentials doesn't match");
  }
  const jwtPayload = {
    email: userExist?.email,
    role: userExist?.role as 'admin',
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserServices = {
  userRegistrationIntoDB,
  userLoginIntoDB,
};
