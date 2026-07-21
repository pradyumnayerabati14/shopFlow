import express from 'express';
import {listProducts, getProductWithID} from '../controllers/productController.js';


router.get('/',listProducts);
router.get('/:id',getProductWithID);

export default router;