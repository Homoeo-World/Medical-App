import express from 'express';
import {addAllMedicines, getMedicineNames, getDetailsByTitleandCompany} from '../controllers/medicine.js'

const router = express.Router();

router.get('/addallmedicines', addAllMedicines)
router.get('/getmedicinenames', getMedicineNames)
router.get('/getmedicinedetails', getDetailsByTitleandCompany)


export default router;