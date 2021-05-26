const authorize = (req,res,next) =>{
    // console.log('authorize');
    const {user}=req.query
    if (user=='Rakshith') {
        req.user = {name:'Rakshith',id:1}
        next()
    }else{
        res.status(401).send("unAuthorize")
        // next()
    }
}

module.exports = authorize