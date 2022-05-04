const axios=require('axios'); //Allows to make a req


exports.homeRoutes=function(req,res){
    
    try{
       /* let {page,size}= req.query;
        if(!page){
            page=1;
        }
        if(!size){
            size=5;
        }

        const limit=parseInt(size);
        const skip = (page-1)*size; */

    //make req to api/users
    axios.get('http://localhost:5000/api/users')
    .then(function(response){
        //console.log(response.data);
        res.render('index.ejs',{users:response.data});
    }) 
}
    catch(err){
    res.send(err)
    };
}


exports.add_user=function(req,res){
    res.render('add_user')
}

exports.update_user=function(req,res){
    axios.get('http://localhost:5000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(function(err){
        res.send(err);
    })
}