import { Router } from 'express';
import { addNewSkills, getAllSkills } from './skill.controller';

const router = Router();

router.get('/', getAllSkills);
router.put('/:id', addNewSkills); 
export const SkillRoutes = router;
