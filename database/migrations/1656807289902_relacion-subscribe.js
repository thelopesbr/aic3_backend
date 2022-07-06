exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumns('subscribe',{
        playerOne:{
            type: 'integer',
            notNull: true,
            references: '"player"',
            onDelete: 'restrict'
          },
        playerTwo:{
            type: 'integer',
            notNull: true,
            references: '"player"',
            onDelete: 'restrict'
          },
    })
};

exports.down = pgm => {
    pgm.dropColumns('subscribe','tournament', {ifExists: true, cascade: true} );
    pgm.dropColumns('subscribe','playerTwo', {ifExists: true, cascade: true} );
    pgm.dropColumns('subscribe','playerOne', {ifExists: true, cascade: true} );
};
