// A Second API Type
//Find a different free public API (for example https://api.chucknorris.io/jokes/random or https://catfact.ninja/fact). 
// Define your own type describing the shape of its JSON response, and write a function that fetches from it,
//  checks response.ok, parses the JSON, and logs a specific field from the result. 
// Handle errors with .catch(), typed as unknown.

type PokemonType = {
    id: number;
    name: string;
};

const fetchPokemonById = (id: number) => {
    const data = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response: Response) => {
        if(!response.ok){
            throw new Error("fetching pokemon did not work")
        }
        return response.json();
    }).then((data: PokemonType) => {
        const pokemon = data.name;
        console.log(`ID:${id}, NAME: ${pokemon}`);
    })
    .catch((error: unknown) => {
        console.log("Error fetching pokemon:", error);
    });
};

fetchPokemonById(1);
fetchPokemonById(3);
fetchPokemonById(6);
