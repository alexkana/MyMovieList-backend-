// Set up express server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "https://strong-pegasus-8e27e5.netlify.app",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up headers
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
 next(); 
});

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