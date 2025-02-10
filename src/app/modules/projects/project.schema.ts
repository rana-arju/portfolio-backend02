import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    images: { type: [String], required: true },
    technologies: {
      type: [String],

      required: [true, 'Technology is required.'],
    },
    frontend: {
      type: String,
    },
    server: {
      type: String,
    },
    description: {
      type: String,
    },
    live: {
      type: String,
    },
    deadline: {
      type: String,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'high',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Query middleware

projectSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
projectSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });

  next();
});


// Create the model
export const Project = model<IProject>('Project', projectSchema);
