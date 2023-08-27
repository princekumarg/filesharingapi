const File=require('./models/file');
const fs=require('fs');
const connectDB=require('./config/db');
connectDB();
async function fetchData(){
    const files=await File.find({createdAt:{ $lt: new Date(Date.now()-24*60*60*1000)}});
    if(files.length){
        for(const file of files){
           try{
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`Successfully deleted ${file.filename}`);
            }catch(err){
                console.log(`While deleting file ${err}`);
            }
           
        }
        console.log("job done!");
    }
}
fetchData().then(process.exit());