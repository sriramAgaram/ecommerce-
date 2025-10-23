
exports.dbCommonFileds = (req, userInput , isCreate = false) =>{
    if(isCreate){
        userInput['created_by'] = req.user.userId;
    }else {
        userInput['updated_by'] = req.user.userId;
    }

    return userInput ;
}