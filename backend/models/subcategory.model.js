'use strict';

const { pick } = require("lodash");

exports.subCategoryModel = (fields) =>{
    let obj = {};
    if(fields){
     obj = pick(fields, [
         'category_id',
         'subcategory_name',
         'description',
         'created_by',
         'updated_by'
     ])
    }


    return obj;
}
