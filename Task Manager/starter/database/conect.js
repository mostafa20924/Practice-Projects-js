const mongoose=require("mongoose");
require('dotenv').config(); // Load environment variables from .env file


const connectDB = async (uri) => {
    try {
        const connectionInstance = await mongoose.connect
        (uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`\n MongoDB connected !!!
            ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1)
        
    }
}
 
module.exports=connectDB;