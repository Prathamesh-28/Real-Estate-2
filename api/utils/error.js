// This code is used to make manual error by providing manual values to statusCode & message of that constructor
const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};
module.exports = {errorHandler}