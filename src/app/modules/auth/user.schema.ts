import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import validator from 'validator';

const userSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required"]

    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email address is required.'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid email type.',
      },
    },
    password: { type: String, required: true, select: 0 },

    role: {
      type: String,
      enum: ['superAdmin',"user","admin"],
      default: "user"
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_rounds));
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isPasswordMatched = async function (
  plainTextpassword: string,
  hashPassword: string,
) {
  return await bcrypt.compare(plainTextpassword, hashPassword);
};

export const User = model<IUser, UserModel>('User', userSchema);
