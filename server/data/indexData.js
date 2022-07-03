const database = require('../infra/database');

exports.get = async function () {
    return await database.any('SELECT id FROM public.pgmigrations WHERE id > 1;')
}
