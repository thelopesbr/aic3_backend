const database = require('../infra/database');

exports.verify = async function () {
    return await database.any('SELECT id FROM public.pgmigrations WHERE id > 1;')
}
