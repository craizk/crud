/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_profile').del()
  await knex('user_profile').insert([
    {id: 1,Firstname:"Jim", Lastname:"Brown", username:"jbrown",password:"hi"},
    
  ]);
};
