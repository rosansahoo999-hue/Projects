import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Rosan:TJHicKNTFwf8J5Si@cluster0.l8xyssy.mongodb.net/Food-Delivery?appName=Cluster0"
    )
    .then(() => console.log("DB Connected"));
};
