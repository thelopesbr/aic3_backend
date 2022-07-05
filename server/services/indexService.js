const { ResponseDTO } = require('../dtos/response');

const initData = require('../data/initData.js');

exports.get = async function() {
    const message = {
        API_Status: "Ok",
        Database_Status: "Not"
    }
    try{
        const response = await initData.verify();

        if(response){
            message.Database_Status = "Ok"
        }
        return new ResponseDTO('Success', 200, '', message)
    }
    catch(err){
        return new ResponseDTO('Error', 500, '❌ System is not prepared, needs to run migrations.', message)
    }
}
