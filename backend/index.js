import express from "express";
import cors from 'cors';
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js"
import userRoute from './route/user_route.js'
const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000
// app.get('/', (req, res) => {
//     res.send("Hello Worl");
// });

//connect to mongodb
const URL = process.env.MongoDBURL
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDBURL");

} catch (error) {
    console.log(error);

}
//defining routes
app.use("/book", bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`);
})