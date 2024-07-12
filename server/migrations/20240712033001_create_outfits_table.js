export function up(knex) {
  return knex.schema.createTable("outfit", function (table) {
    table.increments("id").primary().notNullable();
    table.date("date").notNullable();
    table.text("description");
    table.json("clothing_item_ids");
    table.json("images");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('outfit');
}
