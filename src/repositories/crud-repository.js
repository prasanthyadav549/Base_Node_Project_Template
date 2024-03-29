const {StatusCodes} = require('http-status-codes');
const {Logger} = require('../config');


class CrudRepository  {
      constructor(model) {
          this.model = model;
      }

      async create(data) {
           const response = await this.model.create(data);
           return response;
      }

      async destroy(data) {
           try {
           const response = await this.model.destroy({
                where : {
                      id: data,
                }
           });
           return response;
        }
        catch (err) { 
            Logger.error('Something went wrong ', err);
        }
      }

      async get(data) {
          try {
         const response = await this.model.findByPk(data);
         return response;
          }
          catch (err) {
            Logger.error('Something went wrong ', err);
          }
      }

      async getAll() {
        try {
          const response = await this.model.findAll();
          return response;
        }
        catch (err) {
            Logger.error('Something went wrong ', err);
        }
      }

      async update(id, data) {
           try {
           const response = await this.model.update(data,{
            where: {
                  id: id
            }
           })
           return response;
        }
        catch (err) {
            Logger.error('Something went wrong ', err);
        }
      }
}

module.exports = CrudRepository;