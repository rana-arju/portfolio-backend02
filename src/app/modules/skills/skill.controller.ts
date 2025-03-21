/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { Skill } from './skill.model';
import { Types } from 'mongoose';

export const addNewSkills = async (req: Request, res: Response) => {
  try {
    const skills = req.body;
    const { id } = req.params;
    // Check if the id is a valid ObjectId
    if (!Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    // Convert id to ObjectId
    const objectId = new Types.ObjectId(id);

    // Update the document
    const result = await Skill.findOneAndUpdate(
      { _id: objectId },
      { $set: skills },
      { new: true },
    );

    if (!result) {
      res.status(404).json({
        success: false,
        message: 'Skill not found',
      });
    }

    // Send response
    res.status(200).json({
      success: true,
      message: 'New Skills added successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await Skill.find();

    // send response
    res.status(200).json({
      success: true,
      message: 'Skills get succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Someting went wrong',
      error,
    });
  }
};
