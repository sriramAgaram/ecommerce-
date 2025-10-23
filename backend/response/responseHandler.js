'use strict';

exports.SuccessResponse = (res, data = {}, msg = 'Success') => {
    return res.status(200).json({ status: true, msg, data })
}

exports.ErrorResponse = (res, error, msg = 'Failed') => {
    return res.status(400).json({ status: false, error:error.message, message: msg })
}