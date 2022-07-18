const Movie = require("../model/movieModel");

//Function that gets all movies from database (get request)
exports.getAllMovies = async (req,res) =>{
    try{
     const [allMovies] = await Movie.getAll();
     res.status(200).json(allMovies);
    }
    catch (err)
    {
      res.status(400).json(err);
    }
}

//Function that returns a movie with a certain id from the database (get request)
exports.getMovieById = async (req,res) =>{
  try{
   const movieId = req.params.id;
   [selectedMovie] = await Movie.getByID(movieId);
   res.status(200).json(selectedMovie);
  }
  catch (err)
  {
    res.status(400).json(err);
  }
}

//Function that adds a new movie to database (post request)
exports.postMovie = async (req,res) =>{
    try{
     const data = {title:req.body.title, year:req.body.year,genre:req.body.genre,rating:req.body.rating,imgUrl:req.body.imgUrl};
     const [movieInfo] = await Movie.getByInfo(data);
     if (movieInfo.length === 0){
     const postResponse = await Movie.create(data);
     res.status(201).json(postResponse);
     }
     else{
       res.status(400).json("Movie already exists")
     }

    } catch (err) {
      res.status(400).json(err);

    }
}

//Function that updates a movie in the database (put request)
exports.putMovie = async (req,res) =>{
    try{
     const movieId = req.params.id;
     const data = {title:req.body.title, year:req.body.year,genre:req.body.genre,rating:req.body.rating,imgUrl:req.body.imgUrl};
     const putResponse = await Movie.update(movieId,data);
     res.status(200).json(putResponse);
    }
    catch (err)
    {
      res.status(400).json(err);
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
    res.status(400).json(err);
  }
}

