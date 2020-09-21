exports.up = knex => knex.schema.createTable("adventures", table => {
    table.increments("id").primary().notNullable();

    table.string("name_adventure").notNullable();
    table.string("adventure_location").notNullable();
    table.string("adventure_history").notNullable();

    table.string("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users")
    
    table.timestamp("created_at").defaultTo(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("adventures")