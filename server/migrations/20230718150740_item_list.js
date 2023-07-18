/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("item_list",table=>{
    table.increments()
    table.integer("user_account_id")
    table.foreign("user_account_id").references("user_profile.id")
    table.string("item_name")
    table.string("description")
    table.integer("quantity")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("item_list",table=>{
    table.dropForeign("user_acount_id")
  })
  .then(()=> knex.schema.dropTableIfExists("item_list"))
};
