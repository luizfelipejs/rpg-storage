exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id").primary().notNullable()

    table.string("username").notNullable().unique();
    table.string("email").notNullable();
    table.string("password").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("users");