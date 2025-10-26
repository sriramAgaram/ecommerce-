'use strict';
const { pick } = require('lodash')
exports.productInsertFileds = (fields) => {
    let object = {};
    if (fields) {
        object = pick(fields, [
            'category_id',
            'sub_category_id',
            'product_name',
            'description',
            'price',
            'stock',
            'image_url',
            'created_by',
            'updated_by'
        ]
        )
    }

    return object;
}