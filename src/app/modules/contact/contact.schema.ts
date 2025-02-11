import { Schema, model } from 'mongoose';
import { IContact } from './contact.interface';

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    message: {
      type: String,
      required: [true, 'Message is required.'],
    },
    email: {
      type: String,
      required: [true, 'email required!'],
    },
    subject: { type: String, required: true },
  },
  { timestamps: true },
);

// Query middleware

contactSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
contactSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });

  next();
});

// Create the model
export const Contact = model<IContact>('Contact', contactSchema);
