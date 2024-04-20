const Email = require('../models/Subscribe');
const mailSender = require('../utils/mailsender')
const {greetingEmail} = require('../utils/greetingEmail')

exports.subscribe = async(req , res) =>{
    try {
        const {email} = req.body;
        if(!email) {
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly"
            })
        }

        let info =  await Email.create({email});
        console.log(info);

        try {
            let emaildata =   await mailSender( email , "Welcome to Arc Educators - Weekly Updates Subscription", greetingEmail());
            console.log('Email Sent Succesfully' , emaildata.response);
            return res.status(200).json({
                success:true,
                message:"Email Sent SuccesFully"
            })
        } catch (error) {
            console.log("Unable to sent Mail ", error.message);
            return res.status(500).json({
                success:false,
                message:"Email is not Sent"
            })
        }
    } catch (error) {
        console.log("Unable to save Email ", error.message);
        return res.status(200).json({
            success:false,
            message:"Unable to save Email"
        })
    }
}