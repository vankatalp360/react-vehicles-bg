const authRoutes = require('../routes/auth')
const vehicleRouts = require('../routes/vehicle')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/vehicle', vehicleRouts)
}
