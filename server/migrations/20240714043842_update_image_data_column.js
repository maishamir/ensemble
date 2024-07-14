export function up(knex) {
    return knex.schema.alterTable('clothing_item', table => {
        table.specificType('image_data', 'LONGBLOB').alter();
    })
}

export function down(knex) {
    return knex.schema.alterTable('clothing_item', table => {
        table.specificType('image_data', 'BLOB').alter()
    })
}
