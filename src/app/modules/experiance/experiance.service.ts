import { IExperiance } from './experiance.interface';
import { Experiance } from './experiance.schema';

const createExperianceIntoDB = async (ExperianceData: IExperiance) => {
  const result = Experiance.create(ExperianceData);

  return result;
};
const updateExperianceIntoDB = async (
  payload: Partial<IExperiance>,
  id: string,
) => {
  const experianceExist = await Experiance.findById(id);
  if (!experianceExist) {
    throw new Error('This experiance not exist!');
  }
  const result = await Experiance.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const getAllExperianceFromDB = async () => {
  const result = await Experiance.find();
  return result;
};
const getExperianceFromDB = async (id: string) => {
  const result = await Experiance.findOne({ _id: id });

  return result;
};
const deleteExperianceFromDB = async (id: string) => {
  const result = await Experiance.deleteOne({ _id: id });

  return result;
};

export const ExperianceServices = {
  createExperianceIntoDB,
  getAllExperianceFromDB,
  getExperianceFromDB,
  deleteExperianceFromDB,
  updateExperianceIntoDB,
};
