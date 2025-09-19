'use strict';

const { pick } = require("lodash");

exports.getCategoryInsertFields = (fileds) =>{
    const object = {};

    if(fileds){
        object = pick(object,[
            'category_name',
            'description',
            'created_by',
            'updated_by'
        ])
    }
}