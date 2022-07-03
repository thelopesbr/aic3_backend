const subscribeService = require('../services/subscribeService');

exports.getById  = async function ( req, res, next ) {
    const response = await subscribeService.getById(req.params.id);

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data)
    } else{
        return  res.status(response.status).send(response)
    }
}
//daqui pra baixo eu não me responsabilizo nao 

exports.post  = async function ( req, res, next ) {

    const response = await subscribeService.post();

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.message)
    } else{
        return  res.status(response.status).send(response)
    }
}
exports.confirm  = async function ( req, res, next ) {
    const response = await subscribeService.confirm();

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data)
    } else{
        return  res.status(response.status).send(response)
    }
}
exports.cancel  = async function ( req, res, next ) {
    const response = await subscribeService.cancel();

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.message)
    } else{
        return  res.status(response.status).send(response)
    }
}

