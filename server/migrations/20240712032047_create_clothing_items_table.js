/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('clothing_item', function (table) {
        table.increments("id").primary().notNullable();
        table.string("name").notNullable();
        table.string("category").notNullable();
        table.string("size").notNullable();
        table.string("image_url").nullable();
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
}

export function down(knex) {
  return knex.schema.dropTable('clothing_item')
};
