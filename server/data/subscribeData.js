// SQL

const database = require('../infra/database');


exports.subscribe = async function (id){
  return await database.oneOrNone('SELECT * FROM public.subscribe WHERE id = $1', id)
}