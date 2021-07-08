const serverErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, message: "Something went wrong." + err.message });
};

module.exports = serverErrorHandler;