
exports.dbCommonFileds = (req, user_input , isCreate = false) =>{
    if(isCreate){
        user_input.created_by = req.auth_user.id;
    }else {
        user_input.updated_by = req.auth_user.id;
    }
}