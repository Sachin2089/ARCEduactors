const Rajasthan = require('../models/Rajasthan');
require('dotenv').config();

exports.rajasthanRegistration = async(req, res) =>{
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

        const User  = await Rajasthan.create({
            name, email, whatsappContact, soloTraveler, startingFrom,  alternateNumber,
            Rooms, totalAmountPaid, date , 
             totalNoOfPartcipants, astrocampCharge
        })
        console.log(User);
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