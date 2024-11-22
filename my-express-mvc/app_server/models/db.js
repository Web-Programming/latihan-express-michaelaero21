let mongoose=require("mongoose")
 let dbURI = "mongodb://localhost:27017/paw-si52"
//let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2"

mongoose.connect(dbURI,{
   //useNewURLParser: true
});

mongoose.connection.on("connected",() => {
    console.log("connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("disconnected from MongoDB");
});
