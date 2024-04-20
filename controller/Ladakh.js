const Ladakh = require('../models/Ladakh');
require('dotenv').config();

exports.ladakhRegistration = async(req, res) =>{
    try {
        const{name, email, whatsappContact, alternateNumber, soloTraveler,  
             astrocampCharge, Rooms, startingFrom, totalAmountPaid, 
             batch, totalNoOfPartcipants, modeOfTravel } = req.body; 

        
        if( !name || !email || !whatsappContact || !soloTraveler || !startingFrom
            || !Rooms || !astrocampCharge || !batch  ||!modeOfTravel
            || !totalAmountPaid  || !totalNoOfPartcipants || !alternateNumber){
        
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly"
            })
        }

        const User  = await Ladakh.create({
            name, email, whatsappContact, soloTraveler, startingFrom,  alternateNumber,
            Rooms, totalAmountPaid, batch , modeOfTravel,
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