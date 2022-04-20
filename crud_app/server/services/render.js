exports.homeRoutes=function(req,res){
    res.render('index.ejs')
}

exports.add_user=function(req,res){
    res.render('add_user')
}

exports.update_user=function(req,res){
    res.render('update_user')
}