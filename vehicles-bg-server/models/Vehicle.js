const mongoose = require('mongoose')

const vehicleCategories = require('../utilities/vehicleCategories');
const fuelCategories = require('../utilities/fuelCategories');
const vehicleConditions = require('../utilities/vehicleConditions');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let vehicleSchema = new mongoose.Schema({
  creator: {type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE},
  brand: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  model: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  category: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: {vehicleCategories},
      message: 'Category is invalid, please select one from the dropdown.'
    },
    default: 'Hatchback',
    required: REQUIRED_VALIDATION_MESSAGE
  },
  description: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  color: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  fuel: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: [fuelCategories],
      message: 'Fuel type is invalid, please select one from the dropdown.'
    },
    default: 'Gasoline',
    required: REQUIRED_VALIDATION_MESSAGE
  },
  location: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  contact: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  euroStatus: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  power: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  gearbox: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: ['Manual', 'Automatic', 'Semi-Automatic'],
      message: 'Gearbox is invalid, valid values include [Manual, Automatic, Semi-Automatic].'
    },
    default: 'Manual',
    required: REQUIRED_VALIDATION_MESSAGE
  },
  condition: {
    type: mongoose.Schema.Types.String,
    enum: {
      values: [vehicleConditions],
      message: 'Condition is invalid, please select one from the dropdown.'
    },
    default: 'Used',
    required: REQUIRED_VALIDATION_MESSAGE
  },
  createDate: {type: mongoose.Schema.Types.Date, default: Date.now},
  price: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  year: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  dors: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  views: {type: mongoose.Schema.Types.Number, default: 0},
  numberOfSeats: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  mileage: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  images: [{type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE}]
})

let Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle