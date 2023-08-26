import express from 'express';

import {postLoginCreds, validateCreds} from '../controllers/login.js';

const router = express.Router();

router.post('/', postLoginCreds);
router.post('/validate', validateCreds);


export default router;