import express from 'express';
import { messageController } from './contact.controller';
const router = express.Router();

// will call controller function

router.post('/', messageController.createMessage);
router.get('/', messageController.getAllMessages);

export const ContactRoutes = router;
