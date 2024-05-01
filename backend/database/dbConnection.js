import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => {
      console.log(`Some problem occured with connecting to db! ${err}`);
    });
};

// remember that password of the atlas needs to be encoded i.e., the special characters should be encoded.