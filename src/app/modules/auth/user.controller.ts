/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './user.service';

const registration = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // will call service func to send this data
    const result = await UserServices.userRegistrationIntoDB(userData);

    // send response
    res.status(200).json({
      success: true,
      message: 'User registration succesfull',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Someting went wrong',
      error,
    });
  }
};
const login = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // will call service func to send this data
    const result = await UserServices.userLoginIntoDB(userData);

    // send response
    res.status(200).json({
      success: true,
      message: 'User login succesfull',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Someting went wrong',
      error,
    });
  }
};

export const userController = {
  registration,
  login,
};
