'use strict';

const { pick } = require("lodash");

exports.getCategoryInsertFields = (fileds) =>{
    let object = {};

    if(fileds){
        object = pick(fileds,[
            'category_name',
            'category_description',
            'created_by',
            'updated_by'
        ])
    }

    return object;
}