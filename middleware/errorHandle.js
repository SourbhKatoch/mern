import {constants } from '../constants';

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // if status code is not set, default to 500

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation Failed',
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stack: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: 'Not Found',
                message: err.message,
                stack: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: 'Server Error',
                message: err.message,
                stack: err.stack
            });
            break;
        default:
            console.error(err);
            res.status(500).json({message: 'An unexpected error occurred'});
    }
}   

export default errorHandler; //exporting the error handler middleware