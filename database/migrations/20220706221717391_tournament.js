/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('tournament', {
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
    pgm.addColumns('subscribe',{
        tournament:{
            type: 'integer',
            notNull: true,
            references: '"tournament"',
            onDelete: 'restrict'
          },
    })
     
};

exports.down = pgm => {
    pgm.dropColumns('subscribe', {ifExists: true, cascade: true} );
    pgm.dropTable('tournament', {ifExists: true})
};
