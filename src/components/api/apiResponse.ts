interface ApiResponse {
    // If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.
    status: string;

    // A short code identifying the type of error returned.
    code?: string;

    // A fuller description of the error, usually including how to fix it.
    message?: string;
}

export default ApiResponse;
