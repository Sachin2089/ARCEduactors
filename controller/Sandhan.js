const Sandhan = require('../models/Sandhan');
require('dotenv').config();

exports.sandhanRegistration = async(req, res) =>{
    try {
        const{name, email, whatsappContact,  soloTraveler,  
            modeOfTravel, astrocampCharge, coupleTent, totalAmountPaid, 
            date, totalNoOfPartcipants, food, travellingCharge, coupleTentCharge } = req.body; 

        if( !name || !email || !whatsappContact || !soloTraveler || !modeOfTravel 
            || !coupleTent || !astrocampCharge || !date  
            || !totalAmountPaid  || !totalNoOfPartcipants || !food || !travellingCharge || !coupleTentCharge){
        
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly"
            })
        }
        console.log("trying to entery in db")
        const User  = await Sandhan.create({
            name, email, whatsappContact, soloTraveler, modeOfTravel, 
            astrocampCharge, coupleTent, totalAmountPaid, date , 
            food, totalNoOfPartcipants, travellingCharge, coupleTentCharge
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