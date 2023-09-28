const router = require('express').Router();
const User = require('../models/User');

//create a new user
router.post("/register", async  (req,res) =>{

    try {
         const newUser = new User(req.body);
         console.log(req.body);
         const user=  await newUser.save();
         res.status(200).send(user);

    } catch (e) {
        res.status(500).json({message: e.message});
    }
})

//get all users
router.get("/users", async (req,res) =>{
 
    try {
         const userFinds = await User.find({});
         res.status(200).json(userFinds);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


//get a user
router.get("/user/:id", async(req, res) => {

   

    try {
        const _id = req.params.id;
        const userFind = await User.findById(_id)
        res.status(200).json(userFind);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put("/update/:id", async(req, res) => {

   

    try {
        const _id = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(_id, req.body,{new:true});
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//delete a user
router.delete("/delete/:id", async(req, res) => {

   

    try {
        const _id = req.params.id;
        const userdelete = await User.findByIdAndDelete(_id);
        res.status(200).json(userdelete);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})



module.exports = router;
