import mongoose from 'mongoose';
import generalDataSchema from '../models/generalData.js';
import tempratureDataSchema from '../models/temprature.js';


export const tempratureGet = async (req,res) =>{
 
  try {
    const temprature = await tempratureDataSchema.find()


    const generalData = generalDataSchema();
    generalData.temp.push(temprature)

    res.status(201).json(generalData);
  } catch (error) {
    res.status(500).json(error.message)
  }

}


export const tempraturePost = async (req,res) =>{
  const {temp} = req.body
  
  try {
    
    const temprature = tempratureDataSchema({
      temp:temp
    })

    await temprature.save() 

  
    res.status(201).json(temprature)

    

  } catch (error) {
    res.status(500).json(error.message)
  }
}