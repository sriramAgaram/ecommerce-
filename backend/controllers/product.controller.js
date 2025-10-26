const { dbCommonFileds } = require("../database/dataBaseCommonFileds");
const { productInsertFileds } = require("../models/product.model");
const qeasy = require('qeasy');
const { SuccessResponse, ErrorResponse } = require("../response/responseHandler");


exports.add = async (req, res) => {
    try {
        const userInput = req.body
        let insertObj = dbCommonFileds(req, userInput, true);
        insertObj = productInsertFileds(insertObj);
        insertObj.image_url = JSON.stringify(insertObj.image_url);
        insertObj.category_id = JSON.stringify(insertObj.category_id);
        insertObj.sub_category_id =JSON.stringify(insertObj.sub_category_id);
        console.log(insertObj)
        const products = await qeasy.insert('products', insertObj);
        SuccessResponse(res, products, 'Product Added SuccessFully')
    } catch (error) {
        console.error('Error from Add Controller', error);
        ErrorResponse(res, error, 'Failed to Add Product')
    }
}

exports.lists = async (req, res) => {
    try {
        const allProducts = await qeasy.findAll('products');
        SuccessResponse(res, allProducts, 'Products List')
    } catch (error) {
        console.error('Error from Add Controller', error);
        ErrorResponse(res, error, 'Failed to Add Product');
    }
};

exports.details = async (req , res) =>{
 try {
    const id = req.params.id;
    const checkIsExistingProduct = await qeasy.findById('products','product_id',id);
    if(checkIsExistingProduct === 0){
        return ErrorResponse(res, 'Product is not found', 'Product Is Not Found')
    }else{
        return SuccessResponse(res , checkIsExistingProduct , 'Product details fetched successfully')
    }
 } catch (error) {
    return ErrorResponse(res, error, 'Failed to fetch prodct')
 }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const userInput = req.body;
        let updateObj = dbCommonFileds(req, userInput, false);
        updateObj = productInsertFileds(updateObj);
        const products = await qeasy.findByIdAndUpdate('products', 'product_id',id,updateObj);
        SuccessResponse(res, products, 'Product Updated SuccessFully');
    } catch (error) {
        console.error('Error from Add Controller', error);
        ErrorResponse(res, error, 'Failed to Update Product')
    }
}

exports.delete = async (req, res) =>{
    try {
        const id = req.params.id;
        const deleteproduct = await qeasy.findByIdAndDelete('products', 'product_id', id);
        SuccessResponse(res, deleteproduct, 'Product Deleted SuccessFully');
    } catch (error) {
        console.error('Error from Add Controller', error);
        ErrorResponse(res, error, 'Failed to Delete Product')
    }
}