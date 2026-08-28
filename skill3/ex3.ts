//INTERFACE WITH A TYPED FUNCTION

interface Movie{
    id: number;
    title:string;
    rating:number;
    genres: string[];
};

const movies : Movie[] =[
{   
    id: 1,
    title: "Arrival",
    rating: 8.0,
    genres: ["Sci-Fi", "Drama"]
},
{
    id: 2,
    title: "Mean Girls",
    rating: 7.1,
    genres: ["Comedy", "Teen"]
},
{
    id: 3,
    title: "Blade Runner",
    rating: 8.1,
    genres: ["Sci-Fi", "Thriller"]
},
{
    id: 4,
    title: "Parasite",
    rating: 8.5,
    genres: ["Drama", "Thriller"]
},
{
    id: 5,
    title: "The Substance",
    rating: 7.3,
    genres: ["Horror", "Sci-Fi"]
}
];

function getMovieByGenre( movies:Movie[], genre:string): Movie[]{
    return movies.filter((m) => m.genres.includes(genre));
};


console.log(getMovieByGenre(movies, "Sci-Fi").map((m) => m.title));
console.log(getMovieByGenre(movies, "Horror").map((m) => m.title));
console.log(getMovieByGenre(movies, "Drama").map((m) => m.title));