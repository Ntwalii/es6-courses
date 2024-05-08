const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);

games.delete('Age of Empires');

console.log(games);

// games.clear()
console.log(games);

console.log(games.size);
console.log(typeof games);

for(const game of games){
    console.log(game);
}

let entriesArray=games.entries()
console.log(entriesArray)

let y=games.values()
console.log(y)

let x=games.keys()
console.log(y)