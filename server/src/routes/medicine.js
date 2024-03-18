import express from 'express';
import {addAllMedicines, getMedicineNames, getDetailsByTitleandCompany, searchAutocompleteMedicines} from '../controllers/medicine.js'

const router = express.Router();

router.get('/addallmedicines', addAllMedicines)
router.get('/getmedicinenames', getMedicineNames)
router.get('/getmedicinedetails', getDetailsByTitleandCompany)
router.get('/getsearchresults', searchAutocompleteMedicines)


export default router;