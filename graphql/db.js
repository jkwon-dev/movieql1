export let movies = [
    {
        id: 0,
        name: "Star Wars - The new one", 
        score: 1
        
    },
    {
        id: 1,
        name: "Avengers - The new one", 
        score: 8
    },
    {
        id: 2,
        name: "Hello", 
        score: 60
    },
   
]; 

export const getMovies = () => movies; 

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id); 
    return filteredMovies[0]; 
};