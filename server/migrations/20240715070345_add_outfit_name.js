export function up(knex) {
    return knex.schema.table('outfit', table => {
        table.string('name')
    })
}

export function down(knex) {
    return knex.schema.table('outfit', table => {
        table.dropColumn('name')
    })
}