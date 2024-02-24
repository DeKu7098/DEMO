import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "PROJECT"
    }).then(() => {
        console.log("mongoose connected")
    }).catch(err => {
        console.log(err);
    })
}

