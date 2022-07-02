const indexService = require('../services/indexService');

exports.get  = async function ( req, res, next ) {

    const response = await indexService.get();

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data)
    } else{
        return  res.status(response.status).send(response)
    }
}
