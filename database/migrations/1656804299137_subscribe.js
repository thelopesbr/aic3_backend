/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('player', {
        id: {type: 'serial', notNull: true, primaryKey: true},
        name: {type: 'varchar(50)', notNull: true},
        email: {type: 'varchar(20)', notNull: true},
        born: {type: 'date', notNull: true},
        shirt: {type: 'varchar(10)', notNull: false},
        city: {type: 'varchar(50)', notNull: true},
        phone: {type: 'varchar(20)', notNull: true},
        category: {type: 'varchar(20)', notNull: true},
        rank: {type: 'varchar(20)', notNull: true},
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
    })
    pgm.createTable('subscribe', {
        id: {type: 'serial', primaryKey: true},
        category: {type: 'varchar(20)', notNull: true},
        restriction: {type: 'varchar(100)', notNull: true},
        terms: {type: 'boolean',notNull: true},
        state: {type: 'varchar(10)', notNull: true},
        createdAt: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
        },
    })
};

exports.down = pgm => {
    pgm.dropTable('subscribe', {ifExists: true})
    pgm.dropTable('player', {ifExists: true})
};
