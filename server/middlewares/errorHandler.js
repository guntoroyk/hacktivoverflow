module.exports = {
  errorHandler(err, req, res, next) {
    const status = err.status
    const message = err.message

    res.status(status).json({
      errors: [message]
    })
  }
}