const { ResponseDTO } = require('../dtos/response');

exports.get = async function() {
    try{
        const message = {
            API_Status: "Ok",
            Database_Status: "Not"
        }
        return new ResponseDTO('Success', 200, '', message)
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}