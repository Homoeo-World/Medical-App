import express from 'express';
import authenticateJWT from '../middleware/auth.js'

import {postLoginCreds, validateCreds, authTest} from '../controllers/user.js';

const router = express.Router();

router.post('/', postLoginCreds);
router.post('/validate', validateCreds);
router.get('/authtest', authenticateJWT, authTest)

 
export default router;