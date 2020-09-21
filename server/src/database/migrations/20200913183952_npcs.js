exports.up = knex => knex.schema.createTable("npcs", table => {
    table.increments("id").unique();

    table.string("name").notNullable();
    table.string("age").notNullable();
    table.string("objective").notNullable();

    table.string("adventure_id").notNullable();
    table.foreign("adventure_id").references("id").inTable("adventures")
    
    table.timestamp("created_at").defaultTo(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("npcs")