import { IBlog } from './blog.interface';
import { Blog } from './blog.schema';

const createBlogIntoDB = async (ProjectData: IBlog) => {
  const result = await Blog.create(ProjectData);

  return result;
};

const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const getBlogFromDB = async (id: string) => {
  const result = await Blog.findOne({ _id: id });

  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.updateOne({ _id: id }, { isDeleted: true });

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  getBlogFromDB,
  deleteBlogFromDB,
};
