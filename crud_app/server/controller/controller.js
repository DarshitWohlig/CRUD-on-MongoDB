const UserDB = require('../model/model');
var Users=require('../model/model');
const { use } = require('../routes/route');


//Create a new user
exports.create = function(req,res){

    //Empty Validation
    if(!req.body){
        res.status(400).send({message:"Content Cannot be empty"}); 
        return;
    }

    //New User
    const user=new UserDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    user
    .save(user)
    .then(function(data){
        res.send(data);
        res.redirect('/add-user')
    })
    .catch(function(err){
        res.status(505).send({
            message:err.message||"Some error occured while createing operations"
        });
    });
}

//Return all users
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        UserDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        UserDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

//Update User
exports.update = function(req,res){
    if(!req.body){
        res.status(300).send({message:"Content Updatation Cannot be empty"}); 
        return;
    }
    const id =req.params.id;
    UserDB.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(function(data){
        if(!data){
            res.status(303).send({message:`Cannot update user with id ${id} maybe user not found!!!`}); 
            return;
        }
        else{
            res.send(data);
        }
    })
    .catch(function(err){
        res.status(500).send({message:"Error updating user info"})
    })
}


//Delete A User
exports.delete = function(req,res){
    const id =req.params.id;
    UserDB.findByIdAndDelete(id)

    .then(function(data){
        if(!data){
            res.status(303).send({message:`Cannot Delete user with id ${id} maybe user not found!!!`}); 
            return;
        }
        else{
            res.send({message:"User Deleted Successfullyyyy"});
        }
    })
    .catch(function(err){
        res.status(500).send({message:"Error Deleting user id"})
    }) 
}