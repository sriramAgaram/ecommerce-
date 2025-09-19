'use strict';
const qeasy = require('qeasy');
const { SuccessResponse, ErrorResponse } = require("../response/responseHandler");

const { subCategoryModel } = require("../models/subcategory.model");
const { dbCommonFileds } = require('../database/dataBaseCommonFileds');

exports.add = async (req, res) => {
    try {
        const userInput = req.body;
        let subcategoryObj = dbCommonFileds(userInput);
        subcategoryObj = subCategoryModel(subcategoryObj);
        const subcategory = await qeasy.insert('sub_categories', subcategoryObj);
        SuccessResponse(res, subcategory, 'Sub Category Added SuccessFully')

    } catch (error) {
        console.error('Error from sub category Controller', error);
        ErrorResponse(res, error, 'Failed to Add Sub Category');
    }
}

exports.lists = async (req, res) => {
    try {
        const allSubCategories = await qeasy.findAll('sub_categories');
        SuccessResponse(res, allSubCategories, 'Sub Categories List')
    } catch (error) {
        console.error('Error from Add Controller', error);
        ErrorResponse(res, error, 'Failed to Add Product');
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        let updateData = req.body;
        let updatedDatas = dbCommonFileds(updateData, false);
        updatedDatas= qeasy.findByIdAndUpdate('sub_categories','sub_category_id',id)
        SuccessResponse(res, updateData, 'successs');
    } catch (error) {
        ErrorResponse(res, error, 'Error from Update category')
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let deleteData = qeasy.findByIdAndDelete('sub_categories', 'sub_category_id', id);
        SuccessResponse(res, deleteData, 'successs');
    } catch (error) {
        ErrorResponse(res, error, 'Error from delete category')
    }
}