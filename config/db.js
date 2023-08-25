require('dotenv').config();
const mongoose=require('mongoose');


function connectDB(){//Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const db=mongoose.connection;
    db.on('error',console.error.bind(console,'connection error ☹️☹️☹️☹️'));
    db.once('open',function callback(){
        console.log('Database Connected 🥳🥳🥳🥳');
    })
}
module.exports=connectDB;