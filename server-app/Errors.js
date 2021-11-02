export class ValidateError extends Error {
    constructor(message = 'Incorrect data format') {
        super(message);
        this.status = 400;
    }
}

export class ServerError extends Error {
    constructor(message = 'Server internal error') {
        super(message);
        this.status = 500;
    }
}