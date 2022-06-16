import mongoose from "mongoose";

const temprature = mongoose.Schema({
  temp:{
    type:Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const tempratureDataSchema = mongoose.model("tempratureData", temprature)

export default tempratureDataSchema