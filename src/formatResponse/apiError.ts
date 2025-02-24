class ApiError extends Error {
    statusCode: number;
    success: boolean;
  
    constructor(
      statusCode: number, 
      message = "Something went WRONG!", 
    ) {
      super(message);
      this.statusCode = statusCode;
      this.success = false;
    }
  }
  
  export default ApiError;
  