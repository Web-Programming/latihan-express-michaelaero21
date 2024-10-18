let mongoose=require("mongoose")
let dbURL = "mongodb://localhost:27017"

mongoose.connect(dbURL,{
   //useNewURLParser: true
});

mongoose.connection.on("connected",() => {
    console.log("connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("disconnected from MongoDB");
});
