import express from 'express';
import { postInfoAndMessage } from '../Controllers/addContact.js';

const router = express.Router();

router.post('/contact', postInfoAndMessage);

export default router;
