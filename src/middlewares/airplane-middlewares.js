const { StatusCodes } = require('http-status-codes');
const {ErrorResponse} = require('../utils/common')

function validateCreateRequest(req,res,next) {
     if(!req.body.modelNumber) {
         ErrorResponse.message = "something went wrong in the body";
         ErrorResponse.error = {explanation: 'modelNumber not found in the oncoming request in the correct form'}
          return res.
                    status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
     }
     next();
}

module.exports = {
     validateCreateRequest
}