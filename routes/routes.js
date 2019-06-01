const assetHandler = require('../handler/handler.js');
const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/assets',
    handler: assetHandler.findAll
  },
  {
    method: 'GET',
    path: '/assets/{id}',
    handler: assetHandler.findOne,
    options: {
      validate: {
        params: {
          id: Joi.required()
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/assets',
    handler: assetHandler.createNew
  },
  {
    method: 'PUT',
    path: '/assets/{id}',
    handler: assetHandler.updateOne,
    options: {
      validate: {
        params: {
          id: Joi.required()
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/assets/{id}',
    handler: assetHandler.deleteOne,
    options: {
      validate: {
        params: {
          id: Joi.required()
        }
      }
    }
  }
];
