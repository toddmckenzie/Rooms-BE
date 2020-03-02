
exports.up = function(knex) {
    return knex.schema.createTable('rooms', tbl => {
        tbl.increments();
        tbl.integer('room_id').notNullable();
        tbl.string('title').notNullable();
        tbl.string('description');
        tbl.string('coordinates');
        tbl.integer('elevation');
        tbl.string('terrain');
        tbl.boolean('n_exit').defaultTo(false);
        tbl.boolean('s_exit').defaultTo(false);
        tbl.boolean('w_exit').defaultTo(false);
        tbl.boolean('e_exit').defaultTo(false);
        tbl.string('n').defaultTo('?');
        tbl.string('s').defaultTo('?');
        tbl.string('w').defaultTo('?');
        tbl.string('e').defaultTo('?');
        
    })
};

exports.down = function(knex) {
    return knex.schemda.dropTableIfExits('rooms')
};
