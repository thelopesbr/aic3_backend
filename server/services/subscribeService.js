const { ResponseDTO } = require('../dtos/response');

const subscribeData = require('../data/subscribeData.js');

exports.getById = async function(id) {
    try{
        const response = await subscribeData.subscribe(id);
        if(response){
            return new ResponseDTO('Success', 200, '',response);
        }
        else{
            return new ResponseDTO('Error', 404, 'Subscribe not found.')
        }
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}
exports.post = async function() {
    try{
        return new ResponseDTO('Success', 200, '')
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}
exports.confirm = async function() {
    try{
        return new ResponseDTO('Success', 200, '')
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}
exports.cancel = async function() {
    try{
        return new ResponseDTO('Success', 200, '')
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}