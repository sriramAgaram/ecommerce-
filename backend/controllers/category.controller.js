const { insert, findByIdAndDelete, findByIdAndUpdate } = require("qeasy");
const { dbCommonFileds } = require("../database/dataBaseCommonFileds");
const { getCategoryInsertFields } = require("../models/category.model");
const { SuccessResponse, ErrorResponse } = require("../response/responseHandler");

exports.add = async (req, res) => {
  try {
    let userInput = req.body;
    let insertObj = dbCommonFileds(req, userInput, true);
    insertObj['category_description'] = insertObj.description
    insertObj = getCategoryInsertFields(insertObj);
    const category = await insert('categories', insertObj);
    SuccessResponse(res, category, 'success');
  } catch (error) {
    console.error('ERROR DETAILS:', error.message);
    console.error('STACK TRACE:\n', error.stack);
    ErrorResponse(res, error, 'Error from add category controller');
  }
};



exports.lists = async (req, res) => {
    try {
        const allProducts = await findAll('categories');
        SuccessResponse(res, allProducts, 'success')
    } catch (error) {
        ErrorResponse(res, error, 'Error from category Lists');
    }
}


exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        let updateData = req.body;
        updateData = dbCommonFileds(req, updateData, false);
        const updatedDatas = findByIdAndUpdate('categories','category_id',id)
        SuccessResponse(res, updateData, 'successs');
    } catch (error) {
        ErrorResponse(res, error, 'Error from Update category')
    }
}


exports.delete = async (req,res) =>{
    try {
        const id = req.params.id;
        let deleteData = findByIdAndDelete('categories','category_id',id)
    } catch (error) {
        ErrorResponse(res, error, 'Error from delete category')
    }
}