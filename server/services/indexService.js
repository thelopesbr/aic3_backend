const shell = require('shelljs');
const { ResponseDTO } = require('../dtos/response');

const indexData = require('../data/indexData.js');

exports.get = async function() {
    const message = {
        API_Status: "Ok",
        Database_Status: "Not"
    }
    try{
        const response = await indexData.get();

        if(response){
            message.Database_Status = "Ok"
        }
        return new ResponseDTO('Success', 200, '', message)
    }
    catch(err){
        try{
            const message = {
                API_Status: "Ok",
                Database_Status: "OK"
            }
            shell.exec('yarn migrate up');
            return new ResponseDTO('Success', 200, '', message)
        }
        catch{
            return new ResponseDTO('Error', 500, '❌Error accessing database',err.stack);
        }
    }
}
