const mongoose = require('mongoose');

const connectDB= async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{

            useNewUrlParser: true
        });
        console.log(`MongoDB connection Successfullllll : ${conn.connection.host}` );
    }
    catch (error) {
        console.log(error);
        process.exit(true);
    }
}

module.exports=connectDB