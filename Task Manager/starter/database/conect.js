const mongoose=require("mongoose");

const conectionString="mongodb+srv://printwork664_db_user:Password@cluster0.fqkf6u3.mongodb.net/TaskManager?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (conectionString, {
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