export function up(knex){
    return knex.schema.table('outfit', table => {
        table.dropColumn('images')
    })
}

export function down(knex) {
    return knex.schema.table('outfit', table => {
        table.json('images')
    })
}