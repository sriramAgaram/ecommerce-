const { dbCommonFileds } = require("../database/dataBaseCommonFileds");
const { productInsertFileds } = require("../models/product.model");
const qeasy = require('qeasy');
const { SuccessResponse, ErrorResponse } = require("../response/responseHandler");


exports.add = async (req, res) => {
    try {
        const userInput = req.body
        let insertObj = dbCommonFileds(req, userInput, true);
        insertObj = productInsertFileds(insertObj);
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