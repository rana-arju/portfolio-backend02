import express from 'express';
import { userController } from './user.controller';
const router = express.Router();


router.post('/', userController.registration);
router.post('/', userController.login);


export const AuthRoutes = router;
