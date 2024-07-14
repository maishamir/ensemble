export function up(knex) {
    return knex.schema.table('clothing_item', table => {
        table.text('image_name');
        table.binary('image_data');
        table.text("image_mimetype")
    })
}

export function down(knex) {
    return knex.schema.table('clothing_item', table => {
        table.dropColumn('image_name');
        table.dropColumn('image_data');
        table.dropColumn("image_mimetype");
    })
}