import express from 'express';
import { projectController } from './project.controller';
const router = express.Router();

// will call controller function

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProject);
router.get('/:id', projectController.getProject);
router.delete('/:id', projectController.deleteProject);

export const ProjectRoutes = router;
