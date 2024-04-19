const User = require("../models/user")

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({})
    return res.status(200).json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id)
    return res.status(200).json(user);
}

async function handleCreateNewUser (req,res){
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender){
        return res.status(400).json({msg :"Every field is required.."})
    }
    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name ,
        gender : body.gender,
        email: body.email,
    })
    console.log(result);
    return res.status(201).json({ msg:"Success..."})
}

async function handleUpdateUser(req,res){
    try {
        const body = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json({ status: "success", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleDeleteUser(req,res){
    try{
        if(req.params.id){
        await User.findByIdAndDelete(req.params.id)
        return res.json({status : "User deleted Successfully..."})}
        else{
            return res.json({msg:"User not find..."})
        }
    }
    catch(err){
        console.log("Error deleting user:",err)
        return res.status(500).json({error : "Internal Server Error"});
    }
}

module.exports = {
    handleGetAllUsers,
    handleCreateNewUser,
    handleUpdateUser,
    handleDeleteUser,
    handleGetUserById,
}