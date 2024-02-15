import express from 'express';
import multer from 'multer';
import {postNewProduct, getAllproducts, getProducts, getProductByTitle,  searchAutocompleteProducts, uploadMedicineImagesPOC} from '../controllers/product.js'

const router = express.Router();

router.post('/', postNewProduct);
router.get('/allproducts', getAllproducts);
router.get('/getproducts', getProducts);
router.get('/getproductbytitle', getProductByTitle);
router.get('/searchproducts', searchAutocompleteProducts);

router.post('/uploadimages',uploadMedicineImagesPOC)

export default router;