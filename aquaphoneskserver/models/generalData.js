import mongoose from "mongoose";

const generalData = mongoose.Schema({
  temp:Array
})

const generalDataSchema = mongoose.model("generalDataSchema", generalData)

export default generalDataSchema