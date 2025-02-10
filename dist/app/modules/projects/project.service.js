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
exports.ProjectServices = void 0;
const project_schema_1 = require("./project.schema");
const createProjectIntoDB = (ProjectData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_schema_1.Project.create(ProjectData);
    return result;
});
const updateProjectIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectExist = yield project_schema_1.Project.findById(id);
    if (!projectExist) {
        throw new Error('This project not exist!');
    }
    const result = yield project_schema_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const getAllProjectFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_schema_1.Project.find();
    return result;
});
const getProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_schema_1.Project.findOne({ _id: id });
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_schema_1.Project.updateOne({ _id: id }, { isDeleted: true });
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getAllProjectFromDB,
    getProjectFromDB,
    deleteProjectFromDB,
    updateProjectIntoDB,
};
