
const subscribeService = require('../services/subscribeService');

exports.getById  = async function ( req, res, next ) {
    const response = await subscribeService.getById(req.params.id);

    if (response.type === 'Success'){
        return  res.status(response.status).json(response.data);
    } else{
        return  res.status(response.status).send(response);
    }
}
exports.post  = async function ( req, res, next ) {
    
    const subscribe = {
        playerOne: req.body?.playerOne,
        playerTwo: req.body?.playerTwo,
        category: req.body?.category,
        restriction: req.body?.restriction,
        tournament: req.body?.tournament,
        state: 'created',
        terms: req.body?.terms
    }
    const response = await subscribeService.post(subscribe);

    if (response.type === 'Success'){
        return  res.status(response.status).json({message:response.message});
    } else{
        return  res.status(response.status).send(response);
    }
}
exports.confirm  = async function ( req, res, next ) {

    const response = await subscribeService.confirm(req.params.id);

    if (response.type === 'Success'){
        return  res.status(response.status).json({message:response.message});
    } else{
        return  res.status(response.status).send(response);
    }
}
exports.cancel  = async function ( req, res, next ) {
    const response = await subscribeService.cancel(req.params.id);

    if (response.type === 'Success'){
        return  res.status(response.status).json({message:response.message});
    } else{
        return  res.status(response.status).send(response);
    }
}

