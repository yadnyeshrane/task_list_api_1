const notfound=(req,res,next)=>{
    res.status(404).json({msg:'Route does not exist'})
}

module.exports=notfound;