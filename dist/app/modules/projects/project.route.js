"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
// will call controller function
router.post('/', project_controller_1.projectController.createProject);
router.get('/', project_controller_1.projectController.getAllProject);
router.get('/:id', project_controller_1.projectController.getProject);
router.delete('/:id', project_controller_1.projectController.deleteProject);
router.patch('/:id', project_controller_1.projectController.updateProject);
exports.ProjectRoutes = router;
