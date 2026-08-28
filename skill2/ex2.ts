//FILTERING NAMES

let names: string[]= ["Harry", "Robert", "Olly", "Mo", "Jordan", "Liv"];
const shortNames : string[] = names.filter((n) => n.length <= 4 );

console.log(shortNames);