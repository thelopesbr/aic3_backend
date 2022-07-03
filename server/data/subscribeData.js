// SQL

const database = require('../infra/database');


exports.getById= async function (id){
  return await database.oneOrNone('SELECT "playerOne", "playerTwo", category, restriction, state, terms FROM public.subscribe WHERE id = $1', id)
}
exports.post = async function (playerOne, playerTwo, category, restriction, state, terms){
    return await database.one('INSERT INTO public.subscribe ("playerOne", "playerTwo", category, restriction, state, terms) VALUES ($1, $2, $3, $4, $5, $6) returning * ', [playerOne, playerTwo, category, restriction, state, terms])
}
exports.confirm = async function (id){
  return await database.none('UPDATE public.subscribe SET state=$1 WHERE id = $2;',['confirmed', id])
}
exports.cancel = async function (id){
  return await database.none('DELETE FROM public.subscribe WHERE id = $1;',id)
}
