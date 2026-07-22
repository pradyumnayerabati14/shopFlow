import {getAllProducts, getProductWithIDService} from "../services/productServices.js";


async function listProducts(req,res){

    const products = await getAllProducts();
    res.status(200).json(products);
}

async function getProductWithID(req,res){
    const productID = req.params.id;
    const product = await getProductWithIDService(Number(productID));
    if(product){
        res.status(200).json(product);
    }
    else{
        res.status(404).json({"message": `Product not found for ${productID} ID`})
    }
  
}

export {listProducts, getProductWithID};