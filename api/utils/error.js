export const errorHandler = () => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}