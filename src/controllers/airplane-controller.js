const {StatusCodes} = require('http-status-codes')
const {AirplaneService} = require('../services') 
const {ErrorResponse, SuccessResponse} = require('../utils/common')


async function  createAirplane(req,res) {
        try {
             console.log("request-body",req.body);
             const airplane = await AirplaneService.createAirplane(
                {
                    modelNumber: req.body.modelNumber,
                    capacity: req.body.capacity
                }
             )
             SuccessResponse.body = airplane;

             return res.status(StatusCodes.CREATED).json(SuccessResponse)
        }

        catch (err) {
            ErrorResponse.error = err
            return res.status(err.statusCode).json(ErrorResponse)
        }
}

module.exports = {
    createAirplane
}