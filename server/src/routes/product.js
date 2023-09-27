import express from 'express';

import {postNewProduct, getAllproducts, getProducts, searchAutocompleteProducts} from '../controllers/product.js'

const router = express.Router();

router.post('/', postNewProduct);
router.get('/allproducts', getAllproducts);
router.get('/getproducts', getProducts);
router.get('/searchproducts', searchAutocompleteProducts);

export default router;