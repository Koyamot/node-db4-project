

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, step: 'wash potato' },
        { id: 2, step: 'Very carefully, poke the potato with a fork for 6-8 times, depending on size' },
        { id: 3, step: 'Place potato in microwave-safe bowl. Fill bowl with water until its about 1/4 way up the potato.' },
        { id: 4, step: 'Put a wet paper towel over potato and place in microwave for 8 mins.' },
        { id: 5, step: 'Check potato every 3-4 minutes by poking it with a fork. When the fork goes in easily, remove from microwave. Be careful, it may be hot.' },
        { id: 6, step: 'Very carefully,  slit open the potato, how you please. Be careful there may be a lot of steam.' },
        { id: 7, step: 'Add salt, pepper, and butter to the top of your potato. Also, add any other ingredients you enjoy on a potato' },

      ]);
    });
};