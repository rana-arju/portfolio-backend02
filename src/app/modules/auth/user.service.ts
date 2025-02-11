import { IUser } from './user.interface';
import { User } from './user.schema';

const userRegistrationIntoDB = async (payload: IUser) => {
  const userExist = await User.findOne({ email: payload?.email });
  if (userExist) {
    throw new Error('This user already exist');
  }
  const result = await User.create(payload);

  return result;
};
const userLoginIntoDB = async (payload: Partial<IUser>) => {
  const userExist = await User.findOne({ email: payload?.email });
  if (!userExist) {
    throw new Error('This user not exist');
  }
  const result = await User.findOne({ email: payload.email });

  return result;
};

export const UserServices = {
  userRegistrationIntoDB,
  userLoginIntoDB,
};
