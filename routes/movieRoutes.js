//Routing
const express = require("express");

const movieController = require("../controller/movieController");

const router = express.Router();

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovieById);

router.post('/', movieController.postMovie);

router.put('/:id',movieController.putMovie);

router.delete('/:id', movieController.deleteMovie);

module.exports = router;
