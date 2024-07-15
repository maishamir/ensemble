export function up(knex) {
    return knex.schema.table('outfit', table => {
        table.string('thumbnail')
    })
}

export function down(knex) {
    return knex.schema.table('outfit', table => {
        table.dropColumn('thumbnail')
    })
}