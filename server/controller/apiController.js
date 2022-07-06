const apiService = require('../services/apiService');

exports.get  = async function ( req, res, next ) {

    const response = await apiService.get();

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data)
    } else{
        return  res.status(response.status).send(response);
    }
}

exports.init  = async function ( req, res, next ) {
    
    const response = await apiService.init();

    if (response.type === 'Success'){
        return  next()
    } else{
        return  res.status(response.status).send(response);
    }
}