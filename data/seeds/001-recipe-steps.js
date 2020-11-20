exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-steps').insert([
        { id: 1, step_id: 1, recipe_id: 1, step_number: 1 },
        { id: 2, step_id: 2, recipe_id: 1, step_number: 2 },
        { id: 3, step_id: 3, recipe_id: 1, step_number: 3 },
        { id: 4, step_id: 4, recipe_id: 1, step_number: 4 },
        { id: 5, step_id: 5, recipe_id: 1, step_number: 5 },
        { id: 6, step_id: 6, recipe_id: 1, step_number: 6 },
        { id: 7, step_id: 7, recipe_id: 1, step_number: 7 },
      ]);
    });
};