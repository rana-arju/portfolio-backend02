"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const blog_schema_1 = require("./blog.schema");
const createBlogIntoDB = (ProjectData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_schema_1.Blog.create(ProjectData);
    return result;
});
const updateBlogntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogExist = yield blog_schema_1.Blog.findById(id);
    if (!blogExist) {
        throw new Error('This blog not exist!');
    }
    const result = yield blog_schema_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const getAllBlogFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_schema_1.Blog.find();
    return result;
});
const getBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_schema_1.Blog.findOne({ _id: id });
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_schema_1.Blog.deleteOne({ _id: id });
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    getBlogFromDB,
    deleteBlogFromDB,
    updateBlogntoDB,
};
