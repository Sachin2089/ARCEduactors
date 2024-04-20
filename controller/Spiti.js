const Spiti = require('../models/Spiti');
require('dotenv').config();

exports.spitiRegistration = async(req, res) =>{
    try {
        const{name, email, whatsappContact, alternateNumber, soloTraveler,  
             astrocampCharge, Rooms, startingFrom, totalAmountPaid, 
             batch, totalNoOfPartcipants } = req.body; 

        
        if( !name || !email || !whatsappContact || !soloTraveler || !startingFrom
            || !Rooms || !astrocampCharge || !batch 
            || !totalAmountPaid  || !totalNoOfPartcipants || !alternateNumber){
        
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly"
            })
        }

        const User  = await Spiti.create({
            name, email, whatsappContact, soloTraveler, startingFrom,  alternateNumber,
            Rooms, totalAmountPaid, batch , 
             totalNoOfPartcipants, astrocampCharge
        })
        return res.status(200).json({
            User,
            success:true,
            message:"Registration Succesful"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Registartion unsuccesful"
        })
        
    }
}