const { ResponseDTO } = require('../dtos/response');

const subscribeData = require('../data/subscribeData.js');

exports.getById = async function(id) {
    try{
        const response = await subscribeData.getById(id);
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
exports.post = async function(subscribe) {
    try{
        const {playerOne, playerTwo, category, restriction, tournament, terms} = subscribe;
        await subscribeData.post(playerOne, playerTwo, category, restriction, tournament, 'created', terms);
        return new ResponseDTO('Success', 200, 'Successfully subscribed!');
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}
exports.confirm = async function(id) {
    try{
        const subscribe = await subscribeData.getById(id);
        if(subscribe){
            await subscribeData.confirm(id);
            return new ResponseDTO('Success', 200, 'Successfully confirmed subscription!');
        }
        else{
            return new ResponseDTO('Error', 404, 'Subscribe not found.')
        }
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stack);
    }
}
exports.cancel = async function(id) {
    try{
        const subscribe = await subscribeData.getById(id);
        if(subscribe){
            await subscribeData.cancel(id);
            return new ResponseDTO('Success', 200, 'Successfull canceled subscription!');
        }
        else{
            return new ResponseDTO('Error', 404, 'Subscribe not found.')
        }
        //return new ResponseDTO('Error', 404, 'Subscription not found!')
    }
    catch(err){
        return new ResponseDTO('Error', 500, 'Error accessing database',err.stackrr);
    }
}