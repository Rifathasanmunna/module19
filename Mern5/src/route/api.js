const express=require('express');
const ProductsController=require('../controller/ProductsController')


const router=express.Router();


// Invoice & Payment
router.post("/CreateProduct",ProductsController.CreateProduct)
router.get("/ReadProduct",ProductsController.ReadProduct)
router.get('/ReadByID/:id',ProductsController.ReadByID)
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct)
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct)




module.exports=router;