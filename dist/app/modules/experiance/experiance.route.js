"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperianceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experiance_controller_1 = require("./experiance.controller");
const router = express_1.default.Router();
// will call controller function
router.post('/', experiance_controller_1.ExperianceController.createExperiance);
router.get('/', experiance_controller_1.ExperianceController.getAllExperiance);
router.get('/:id', experiance_controller_1.ExperianceController.getExperiance);
router.delete('/:id', experiance_controller_1.ExperianceController.deleteExperiance);
router.patch('/:id', experiance_controller_1.ExperianceController.updateExperiance);
exports.ExperianceRoutes = router;
