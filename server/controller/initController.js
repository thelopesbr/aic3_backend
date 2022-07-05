const initService = require('../services/initService');

exports.get  = async function ( req, res, next ) {

    const response = await initService.get();
    
    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data)
    } else{
        return  res.status(response.status).send(response)
    }
}
