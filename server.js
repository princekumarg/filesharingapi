const express=require('express');
const app=express();
const path=require('path');
const PORT=process.env.PORT || 3000;
const cors=require('cors');
app.use(express.static('public'));
//express doesn't parese the json data so we have to use this middleware
app.use(express.json());
const connectDB=require('./config/db');
connectDB();
//cores
const corsOptions={
    origin:process.env.ALLOWED_CLIENTS.split(',')
}
app.use(cors(corsOptions));
//Template engine
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
//*****Routes*****//
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));//use to show the url file
app.use('/files/download',require('./routes/download'));//use to download the file
app.listen(PORT,() =>{
    console.log(`Listening on ${PORT}`);
})
