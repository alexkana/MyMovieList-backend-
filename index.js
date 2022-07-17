// Set up express server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Import movie routes
const movieRoutes = require("./routes/movieRoutes");
// Simple route
app.get('/',(req,res) =>{
  res.json({message: "Welcome!"})
})
// create movie routes
app.use('/api/movie',movieRoutes);
// Set port, listen for requests
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});