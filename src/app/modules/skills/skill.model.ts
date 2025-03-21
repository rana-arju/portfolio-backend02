import { Schema, model } from 'mongoose';
// Define the Skills schema
// Since we're storing skills as an array of strings, we'll create a simple schema
const skillsSchema = new Schema(
  {

    skills: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);


export const Skill = model('Skill', skillsSchema);
