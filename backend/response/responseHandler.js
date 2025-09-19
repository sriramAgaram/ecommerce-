'use strict';

exports.SuccessResponse = (res, data = {}, msg = 'Success') => {
    return res.status(200).json({ status: true, message, data })
}

exports.ErrorResponse = (res, error, msg = 'Failed') => {
    return res.status(400).json({ status: false, error, message: msg })
}