import { IContact } from './contact.interface';
import { Contact } from './contact.schema';

const sendMessge = async (payload: IContact) => {
  const result = await Contact.create(payload);

  return result;
};

const getAllMessageFromDB = async () => {
  const result = await Contact.find();
  return result;
};

export const MessageServices = {
  sendMessge,
  getAllMessageFromDB,
};
