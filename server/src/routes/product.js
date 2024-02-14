import express from 'express';
import multer from 'multer';
import {postNewProduct, getAllproducts, getProducts, getProductByTitle,  searchAutocompleteProducts, uploadMedicineImagesPOC} from '../controllers/product.js'

const router = express.Router();

// Set up Multer to handle file uploads
const upload = multer();

router.post('/', postNewProduct);
router.get('/allproducts', getAllproducts);
router.get('/getproducts', getProducts);
router.get('/getproductbytitle', getProductByTitle);
router.get('/searchproducts', searchAutocompleteProducts);

// router.post('/uploadimages', upload.single('file'), uploadMedicineImagesPOC); // make it post after POC
router.post('uploadimages',uploadMedicineImagesPOC)

export default router;