const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoassignment', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Database is connected'))
.catch((err) => console.log(err));

  const movieSchema = new mongoose.Schema({
   
      _id: String,
      title: String,
      year: Number,
      genre: String,
      summary: String,
      country: String,
      director: {
        _id:String,
        last_name: String,
        first_name: String,
        birth_date: String
      },
      actors: [
        {}
      ]

  }); 

const Movie = mongoose.model("Movie",movieSchema); 

async function db(){
    // const totalMovie = await Movie.find({}).countDocuments();
    // console.log(totalMovie);
    // const gladiatorMovie = await Movie.find({title:'Gladiator'});
    // console.log(gladiatorMovie);
    
    const s = await Movie.find({"director.last_name":"Nolan"}).countDocuments();
    console.log(s);

   // const movies = await (await Movie.find({title: "Inception"}).find({actors:""}).countDocuments();
    //console.log(movies);
}
db();

