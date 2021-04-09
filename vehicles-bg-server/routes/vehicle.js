const express = require('express')
const authCheck = require('../config/auth-check')
const Vehicle = require('../models/Vehicle')

const router = new express.Router()

function validateVehicleCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseFloat(payload.price)
  payload.dors = parseFloat(payload.dors)
  payload.year = parseFloat(payload.year)
  payload.numberOfSeats = parseFloat(payload.numberOfSeats)
  payload.mileage = parseFloat(payload.mileage)

  if (!payload || typeof payload.brand !== 'string' || payload.brand.length < 2) {
    isFormValid = false
    errors.brand = 'Vehicle brand must be at least 2 symbols.'
  }
  
  if (!payload || typeof payload.model !== 'string' || payload.model.length < 2) {
    isFormValid = false
    errors.model = 'Vehicle model must be at least 2 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 200) {
    isFormValid = false
    errors.description = 'Description must be at least 10 symbols and less than 120 symbols.'
  }
  
  if (!payload || typeof payload.color !== 'string' || payload.color.length < 3) {
    isFormValid = false
    errors.color = 'Vehicle color must be at least 3 symbols.'
  }

  if (!payload || typeof payload.location !== 'string' || payload.location.length < 5) {
    isFormValid = false
    errors.location = 'Vehicle location must be at least 5 symbols.'
  }

  if (!payload || typeof payload.contact !== 'string' || payload.contact.length < 4) {
    isFormValid = false
    errors.contact = 'Vehicle contact must be at least 4 symbols.'
  }

  if (!payload || typeof payload.euroStatus !== 'string' || payload.euroStatus.length < 1) {
    isFormValid = false
    errors.euroStatus = 'Vehicle euroStatus must be at least 1 symbols.'
  }

  if (!payload || typeof payload.power !== 'string' || payload.power.length < 2) {
    isFormValid = false
    errors.power = 'Vehicle power must be at least 2 symbols.'
  }

  if (!payload || typeof payload.mileage !== 'string' || payload.mileage.length < 1) {
    isFormValid = false
    errors.mileage = 'Vehicle mileage must be at least 1 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || !payload.year || payload.year < 1950) {
    isFormValid = false
    errors.year = 'Year must be greater than 1950.'
  }

  if (!payload || !payload.dors || payload.dors < 0) {
    isFormValid = false
    errors.dors = 'Dors must be a positive number.'
  }

  if (!payload || !payload.mileage || payload.mileage < 0) {
    isFormValid = false
    errors.mileage = 'Mileage must be a positive number.'
  }

  if (!payload || !payload.numberOfSeats || payload.numberOfSeats < 0) {
    isFormValid = false
    errors.numberOfSeats = 'Number of seats must be a positive number.'
  }


  // if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
  //   isFormValid = false
  //   errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.'
  // }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const VehicleObj = req.body
  if (req.user !== null) {
    const validationResult = validateVehicleCreateForm(VehicleObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Vehicle
      .create(VehicleObj)
      .then((createdVehicle) => {
        res.status(200).json({
          success: true,
          message: 'Vehicle added successfully.',
          data: createdVehicle
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.post('/edit/:id', authCheck, (req, res) => {
    const VehicleId = req.params.id
    const VehicleObj = req.body
    const validationResult = validateVehicleCreateForm(VehicleObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Vehicle
      .findById(VehicleId)
      .then(existingVehicle => {
        existingVehicle.brand = VehicleObj.brand
        existingVehicle.model = VehicleObj.model
        existingVehicle.description = VehicleObj.description
        existingVehicle.category = VehicleObj.category
        existingVehicle.color = VehicleObj.color
        existingVehicle.fuel = VehicleObj.fuel
        existingVehicle.location = VehicleObj.location
        existingVehicle.contact = VehicleObj.contact
        existingVehicle.euroStatus = VehicleObj.euroStatus
        existingVehicle.power = VehicleObj.power
        existingVehicle.gearbox = VehicleObj.gearbox
        existingVehicle.condition = VehicleObj.condition
        existingVehicle.price = VehicleObj.price
        existingVehicle.year = VehicleObj.year
        existingVehicle.dors = VehicleObj.dors
        existingVehicle.numberOfSeats = VehicleObj.numberOfSeats
        existingVehicle.mileage = VehicleObj.mileage
        existingVehicle.images = VehicleObj.images

        existingVehicle
          .save()
          .then(editedVehicle => {
            res.status(200).json({
              success: true,
              message: 'Vehicle edited successfully.',
              data: editedVehicle
            })
          })
          .catch((err) => {
            console.log(err)
            let message = 'Something went wrong :( Check the form for errors.'
            return res.status(200).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong :( Check the form for errors.'
        return res.status(200).json({
          success: false,
          message: message
        })
      })

})

router.get('/all', (req, res) => {
  Vehicle
    .find()
    .then(Vehicles => {
      res.status(200).json(Vehicles)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  if ((req.user.roles.indexOf('Admin') > -1) || (Vehicle.findById(id).then((Vehicle) => {
    return Vehicle.id === req.user.id;
  }))) {
    Vehicle
      .findById(id)
      .then((Vehicle) => {
        Vehicle
          .remove()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Vehicle deleted successfully!'
            })
          })
      })
      .catch(() => {
        return res.status(200).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

module.exports = router
