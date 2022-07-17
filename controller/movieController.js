const Movie = require("../model/movieModel");

//Function that gets all movies from database (get request)
exports.getAllMovies = async (req,res) =>{
    try{
     const [allMovies] = await Movie.getAll();
     res.json(allMovies);
    }
    catch (err)
    {
      res.json(err);
    }
}

//Function that returns a movie with a certain id from the database (get request)
exports.getMovieById = async (req,res) =>{
  try{
   const movieId = req.params.id;
   [selectedMovie] = await Movie.getByID(movieId);
   res.json(selectedMovie);
  }
  catch (err)
  {
    res.json(err);
  }
}

//Function that adds a new movie to database (post request)
exports.postMovie = async (req,res) =>{
    try{
     const data = {title:req.body.title, year:req.body.year,genre:req.body.genre,rating:req.body.rating,imgUrl:req.body.imgUrl}
     //const data = req.body.newMovie;
     const postResponse = await Movie.create(data);
     res.json(postResponse);
    } catch (err) {
      res.json(err);
    }
}

//Function that updates a certain movie in the database (put request)
exports.putMovie = async (req,res) =>{
    try{
     const movieId = req.params.id;
     const data = {title:req.body.title, year:req.body.year,genre:req.body.genre,rating:req.body.rating,imgUrl:req.body.imgUrl};
     const putResponse = await Movie.update(movieId,data);
     res.json(putResponse);
    }
    catch (err)
    {
      res.json(err);
    }
}

//Function that deletes a movie from the database (delete request)
exports.deleteMovie = async (req,res) =>{
  try{
   const movieId = req.params.id;
   const delResponse = await Movie.delete(movieId);
   res.json(delResponse);
  }
  catch (err)
  {
    res.json(err);
  }
}

