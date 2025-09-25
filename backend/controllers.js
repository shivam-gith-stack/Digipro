const User = require("./userSchema")

exports.register= async(req , res)=>{
    const {name , email , phone , company , website , businessType , budget , projectDetails} = req.body;

    const user = await User.findOne({email})
         const users = await User.create({name , email , phone , company , website , businessType , budget , projectDetails})
        res.status(200).json({users})

}

exports.login = async(req ,res)=>{
    const {email , password} = req.body;
    
    const useremail = await User.findOne({email})
    const pass = await useremail.comparepassword(password)
    if(!pass){
        res.status(400).json({msg : "invalid email or password"})
    }else{
        res.json({msg : "login success"})
    }
}
