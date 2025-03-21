/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ExperianceServices } from './experiance.service';

const createExperiance = async (req: Request, res: Response) => {
  try {
    const project = req.body;

    // will call service func to send this data
    const result = await ExperianceServices.createExperianceIntoDB(project);

    // send response
    res.status(201).json({
      success: true,
      message: 'Experiance is added succesfull',
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
const updateExperiance = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.params;

    console.log(data, id);

    // will call service func to send this data
    const result = await ExperianceServices.updateExperianceIntoDB(data, id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Experiance is update succesfull',
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

const getAllExperiance = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await ExperianceServices.getAllExperianceFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Experiance get succesfully',
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

const getExperiance = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await ExperianceServices.getExperianceFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Experiance get succesfully',
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

// student delete

const deleteExperiance = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await ExperianceServices.deleteExperianceFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Experiance deleted succesful',
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

export const ExperianceController = {
 createExperiance,
 getAllExperiance,
 getExperiance,
 deleteExperiance,
  updateExperiance,
};
