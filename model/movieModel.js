const dbConn = require('../config/dbConfig');

//Movie class- constructor
const Movie = function(movie){
    this.title = movie.title;
    this.year = movie.year;
    this.genre = movie.genre;
    this.rating = movie.rating;
    this.imgUrl = movie.imgUrl;
}
// Get all movies
Movie.getAll = () =>{
    return dbConn.execute('SELECT * FROM movieapp.movie');
}
 
// Get movie by title
Movie.getByTitle = (title)=>{
    return dbConn.execute('SELECT * FROM movieapp.movie WHERE title=?', [title]);
}

// Get movie by ID
Movie.getByID = (id)=>{
    return dbConn.execute('SELECT * FROM movieapp.movie WHERE id=(?)', [id])
}

Movie.getByInfo = (movieData) => {
    return dbConn.execute('SELECT * FROM movieapp.movie WHERE title=?,year=?,genre=?,rating=?',[movieData.title,movieData.year,movieData.genre,movieData.rating]);
}
 
// Create new movie
Movie.create = (movieData) =>{
 return dbConn.execute('INSERT INTO movieapp.movie (title, genre, year, rating, imgUrl) VALUES (?,?,?,?,?)',[movieData.title,movieData.genre,movieData.year,movieData.rating,movieData.imgUrl]);

}
 
//Update movie
Movie.update = (id,movieData) =>{
    return dbConn.execute('UPDATE movieapp.movie SET title=?,genre=?,year=?,rating=?,imgUrl=? WHERE id=?',[movieData.title,movieData.genre,movieData.year,movieData.rating,movieData.imgUrl,id]);
}

// Delete movie
Movie.delete = (id)=>{
    return dbConn.execute('DELETE FROM movieapp.movie WHERE id=?', [id]);
}


 
module.exports = Movie;