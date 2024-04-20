const mongoose = require("mongoose");

const sandhanSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    date:{
      type: String,
      required:true
    },
    email:{
        type: String,
        required: true,
    },
    whatsappContact: {
      type: String,
      required: true
    },
    soloTraveler: {
      type: String,
      enum: ['Yes', 'No'],
      required:true

    },
    totalNoOfPartcipants:{
      type: String,
      required:true
    },      
    coupleTent:{
      type: String,
      enum: ['Yes', 'No'],
      required: true,
    },
    modeOfTravel: {
      type: String,
      enum: ['Self', 'Bus'],
      required: true
    },
    food:{
      type: String,
      enum: ['Veg', 'Non Veg', 'Jain'],
      required: true,
    },
    astrocampCharge: {
      type : String,
      required : true
    },
    travellingCharge:{
      type:String,
      required:true,
    },
    coupleTentCharge:{
      type:String,
      required:true,
    },
    data: {
      type: Buffer,
      required: true
    },
    contentType: {
        type: String,
        required: true
    },
      totalAmountPaid:{
      type:String,
    }
  });
module.exports = mongoose.model("Sandhan", sandhanSchema)