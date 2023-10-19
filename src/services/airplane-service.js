 const {StatusCodes} = require('http-status-codes');

 const {AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

 const airplaneRepository = new AirplaneRepository();

 async function createAirplane(data) {
      
        try {
             const airplane = await airplaneRepository.create(data);
              return airplane;
        }

        catch (err) {
            
            console.log('Error occured ', err);
            if(err == 'TypeError') {
                  throw new AppError('Cannot Create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)
            }
             throw err; 
        }
 }

 module.exports = {
       createAirplane
 }
