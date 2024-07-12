export function up(knex) {
  return knex.schema.createTable("tag", function (table) {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable().unique();
  });
}

export function down(knex) {
  return knex.schema.dropTable("tag");
}
