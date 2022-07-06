const shell = require('shelljs'); 
const { ResponseDTO } = require('../dtos/response');

const initData = require('../data/apiData.js');

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
        return new ResponseDTO('Error', 500, '❌ Error running migrations.')
    }
}

exports.init = async function() {
    try{
        shell.exec('yarn migrate up');
        return new ResponseDTO('Success', 200, 'The migrations command was run' );
    }
    catch(err){
        err = err.stack.split('at')[0].replace('\n    ','').toString()
        return new ResponseDTO('Error', 500, '❌ Error executing the necessary migrations for the system to work.',err);
    }
}
