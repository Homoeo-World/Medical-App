import express from 'express';
import authenticateJWT from '../middleware/auth.js'

import {postLoginCreds, validateCreds, getAddressesbyUser, authTest} from '../controllers/user.js';

const router = express.Router();

router.post('/', postLoginCreds);
router.post('/validate', validateCreds);
router.get('/getAddressesbyUser', getAddressesbyUser)
router.get('/authtest', authenticateJWT, authTest)

 
export default router;