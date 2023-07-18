/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_list').del()
  await knex('item_list').insert([
    {id: 1, user_account_id:1, item_name:'box',description:"It's a box yo", quantity:5},
    
    
    


  ]);
};
