import express from 'express';
import { userController } from './user.controller';
const router = express.Router();

router.post('/', userController.login);
router.post('/registration', userController.registration);

export const AuthRoutes = router;
