import express from 'express';
import { ExperianceController } from './experiance.controller';
const router = express.Router();

// will call controller function

router.post('/', ExperianceController.createExperiance);
router.get('/', ExperianceController.getAllExperiance);
router.get('/:id', ExperianceController.getExperiance);
router.delete('/:id', ExperianceController.deleteExperiance);
router.patch('/:id', ExperianceController.updateExperiance);

export const ExperianceRoutes = router;
