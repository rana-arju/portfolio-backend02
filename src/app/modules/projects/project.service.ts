import { IProject } from './project.interface';
import { Project } from './project.schema';

const createProjectIntoDB = async (ProjectData: IProject) => {
  const result = await Project.create(ProjectData);

  return result;
};
const updateProjectIntoDB = async (payload: Partial<IProject>, id: string) => {
  const projectExist = await Project.findById(id);
  if (!projectExist) {
    throw new Error('This project not exist!');
  }
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const getAllProjectFromDB = async () => {
  const result = await Project.find();  
  return result;
};
const getProjectFromDB = async (id: string) => {
  const result = await Project.findOne({ _id: id });

  return result;
};
const deleteProjectFromDB = async (id: string) => {
  const result = await Project.updateOne({ _id: id }, { isDeleted: true });

  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectFromDB,
  getProjectFromDB,
  deleteProjectFromDB,
  updateProjectIntoDB,
};
