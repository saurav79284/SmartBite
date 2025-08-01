import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://raj079284:53846766>@cluseter0.zkxkdd9.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}
