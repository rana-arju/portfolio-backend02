/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProjectServices } from './project.service';

const createProject = async (req: Request, res: Response) => {
  try {
    const project = req.body;

    // will call service func to send this data
    const result = await ProjectServices.createProjectIntoDB(project);

    // send response
    res.status(200).json({
      success: true,
      message: 'Project is added succesfull',
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
const updateProject = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.params;

    console.log(data, id);

    // will call service func to send this data
    const result = await ProjectServices.updateProjectIntoDB(data, id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Project is update succesfull',
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

const getAllProject = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await ProjectServices.getAllProjectFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Projects get succesfully',
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

const getProject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await ProjectServices.getProjectFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Project get succesfully',
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

const deleteProject = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await ProjectServices.deleteProjectFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Project deleted succesful',
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

export const projectController = {
  createProject,
  getAllProject,
  getProject,
  deleteProject,
  updateProject,
};
