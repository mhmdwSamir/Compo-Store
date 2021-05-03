class Exception {
   
    constructor(message,statusCode,codeException){
  
      this.message = message;
      this.statusCode = statusCode;
      this.status = `${statusCode}`;//.startsWith("4") ? " Fail ☹☹ " :"  error ✖✖ ";
      this.codeException = codeException;
    }
   
 }
 
 exports.Exception =Exception