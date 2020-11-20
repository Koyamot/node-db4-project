
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'potatoes'},
        {id: 2, name: 'butter'},
        {id: 3, name: 'salt'},
        {id: 4, name: 'pepper'}
      ]);
    });
};
