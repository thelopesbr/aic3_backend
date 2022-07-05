const shell = require('shelljs');
const { ResponseDTO } = require('../dtos/response');

exports.get = async function() {
    try{
        await shell.exec('yarn migrate up');
        return new ResponseDTO('Success', 100, '', 'O comando foi gerado, continue...')
    }
    catch{
        return new ResponseDTO('Error', 500, '❌ Error executing the necessary migrations for the system to work.',err.stack);
    }
}
