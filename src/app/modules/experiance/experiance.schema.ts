import { Schema, model } from 'mongoose';
import { IExperiance } from './experiance.interface';

const ExperianceSchema = new Schema<IExperiance>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },

    technologies: {
      type: [String],

      required: [true, 'Technology is required.'],
    },
    period: {
      type: String,
    },
    description: {
      type: [String],
    },
    company: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true },
);

// Create the model
export const Experiance = model<IExperiance>('Experiance', ExperianceSchema);
