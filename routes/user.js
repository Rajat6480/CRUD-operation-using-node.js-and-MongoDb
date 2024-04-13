const express = require("express")
const{ handleCreateNewUser,handleGetAllUsers,handleUpdateUser,handleDeleteUser,handleGetUserById } = require("../controllers/user")
const router = express.Router();



// router.get("/",async(req,res)=>{
    //     const allDbUsers = await User.find({}) 
    //     const list = `<ul>${allDbUsers.map((user)=>`<li>${user.firstName}-${user.email}</li>`).join("")}</ul>`
    //     return res.send(list)
    // })
    
    
    
    
router.get("/:id",handleGetUserById)
router.get("/",handleGetAllUsers)
router.post("/",handleCreateNewUser)
router.patch("/:id",handleUpdateUser);
router.delete("/:id",handleDeleteUser)



module.exports = router;