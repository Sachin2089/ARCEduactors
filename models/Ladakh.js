const mongoose = require("mongoose");

const ladakhSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    batch:{
      type:String,
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
    alternateNumber: {
        type: String,
        required: true
    },
    soloTraveler: {
      type: String,
      enum: ['Yes', 'No'],
      required:true

    },
    modeOfTravel :{
        type:String,
        required:true,
        enum : ['Bike', 'Traveller']
    },
    totalNoOfPartcipants:{
      type: String,
      required:true
    },     
    Rooms:{
      type: String,
      enum: ['Dual Sharing', 'Tripple Sharing'],
      required: true,
    },
    startingFrom:{
        type: String,
        required: true
    },
    astrocampCharge: {
      type : String,
      required : true
    },

    totalAmountPaid:{
      type:String,
    }

  });
module.exports = mongoose.model("Ladakh", ladakhSchema)