exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Microwave Baked Potato', description: 'Easy microwaved baked potato'}
      ]);
    });
};