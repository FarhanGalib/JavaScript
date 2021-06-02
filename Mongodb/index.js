const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    
})
.then(() => console.log('Database is connected'))
.catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gander: String,
    isMarried: Boolean,
    salary: Number,

}) ;

const User = mongoose.model("User", userSchema);

async function fetchInformation(){
    ////find all document
    // const users = await User.find({});

    ////find by isMarried: false
    // const users = await User.find({isMarried:false});

    ////find only one 
    // const users = await User.findOne({isMarried:false});
    
    ////find by id
    // const users = await User.findById('6079a534fb1b8e4ae4305d03');

    ////find using select
    //const users = await User.find({isMarried: false}).select("name salary");

    ////find using select with '-'
    //const users = await User.find({isMarried: false}).select("-name -salary");

    ////find using select and sort(ascending)
    //const users = await User.find({}).select("name salary").sort("salary");

    ////find using select and sort(descending)
    //const users = await User.find({}).select("name salary").sort("-salary");

    ////find using limit
    //const users = await User.find({}).limit(2);

    ////find count document
    //const users = await User.find({}).limit(2).countDocuments();

    



    ////comparison
    ////=======================
    /*
        eq,
        neq,
        gt,
        gte,
        lt,
        lte,
        in,
        nin
    */
    
    ////greater than
    //const users = await User.find( { salary: { $gt : 3000 } } );

    ////in
    //const users = await User.find( { salary: { $in : [25000, 120000] } } );






    ////AND , OR Operation
    ////=====================

    //const users = await User.find().or([{isMarried: true}, {age: 30} ]);
    //const users = await User.find().or([{isMarried: false}, {salary: {$gte: 80000}} ]);

    //const users = await User.find().and([{isMarried: false}, {age: 26} ]);


    //console.log(users);
}
//fetchInformation();







//Store Information
async function storeInformation(){

    const user = new User({
        name: "Farhan Galib",
        age: 26,
        gander: "Male",
        isMarried: false,
        salary: 120000,
    });
    
    await user.save();
    console.log(user);
}

storeInformation();





async function updateInformation(){
    ////1st way
    // const users = await User.findById('6079a534fb1b8e4ae4305d03');
    // users.isMarried = true;
    // users.save();
    //console.log(users);
    
    ////2nd way
//     const users = await User.findByIdAndUpdate('6079a534fb1b8e4ae4305d03', 
//     {
//         isMarried: false, 
//         age: 25.5
//     },
//     {new: true, runValidators: true}
//     );
 }
updateInformation();


async function deleteInformation(){
    // await User.deleteOne({_id:"6027d26084ae3612b8a59525"});
//    await User.deleteMany({isMarried: true});
    // await User.findByIdAndDelete("6027d245cc9c6a2a5800440a");   
}
deleteInformation();