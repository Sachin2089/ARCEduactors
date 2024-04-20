const Kutch = require('../models/Kutch');
require('dotenv').config();

exports.kutchRegistration = async(req, res) =>{
    try {
        const{name, email, whatsappContact, alternateNumber, soloTraveler,  
             astrocampCharge, Rooms, startingFrom, totalAmountPaid, 
            date, totalNoOfPartcipants } = req.body; 

        
        if( !name || !email || !whatsappContact || !soloTraveler || !startingFrom
            || !Rooms || !astrocampCharge || !date  
            || !totalAmountPaid  || !totalNoOfPartcipants || !alternateNumber){
        
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly"
            })
        }

        const User  = await Kutch.create({
            name, email, whatsappContact, soloTraveler, startingFrom,  alternateNumber,
            Rooms, totalAmountPaid, date , 
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