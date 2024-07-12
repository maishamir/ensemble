export function up(knex) {
  return knex.schema.createTable("clothing_item_tag", function (table) {
    table.integer("clothing_item_id").unsigned().notNullable();
    table.integer("tag_id").unsigned().notNullable();
    table
      .foreign("clothing_item_id")
      .references("id")
      .inTable("clothing_item")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("tag_id")
      .references("id")
      .inTable("tag")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.primary(["clothing_item_id", "tag_id"]);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("clothing_item_tag");
}
