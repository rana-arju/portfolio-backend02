"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const router = (0, express_1.Router)();
router.get('/', skill_controller_1.getAllSkills);
router.put('/:id', skill_controller_1.addNewSkills);
exports.SkillRoutes = router;
