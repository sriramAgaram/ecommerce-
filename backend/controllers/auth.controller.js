const { findById, insert } = require('qeasy');
const {ErrorResponse, SuccessResponse} = require('../response/responseHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()


exports.signupController =  async (req , res) => {
    try {
        const {email, password } = req.body;
        if(email){
            const isExistingEmail = await findById(auth,'email',email);
            if(isExistingEmail > 0 ){
                ErrorResponse(res, 'This Email is Already Signed Please sign in ')
            }else{
               const hashedPassword = bcrypt.hash(password , 13 );
               const result = await insert(auth, {email , hashedPassword});
               SuccessResponse(res, result , 'Signup succuessfully')
            }
        }
    } catch (error) {
        console.error('Error in Sign up controller', error);
        ErrorResponse(res, 'Error In Sign up controller','Error in sign up controller')
    }
}

exports.loginController = async (req, res) =>{
    try{
        const { email, password } = req.body;
        if(email && password){
            const user = await findById(auth, 'email', email);
            if(user.length > 0){
                ErrorResponse(res,'There is no email please signup' , 'there is no email Please sign up')
            }else {
                const isMatch = bcrypt.compare(password ,user.password);
                if(isMatch){
                   const token = jwt.sign({userId:user.id ,email} ,process.env.JWTSECRET , {expiresIn:'1h'});
                    SuccessResponse(res, token , 'Login successfull' )
                }else{
                    ErrorResponse(res, 'Invalid Credentials' , 'Invalid Credentials')
                }
            }
        }else{
            ErrorResponse(res , 'Login Required both email and password' , 'Login Required both email and password')
        }

    }catch(error){
        ErrorResponse(res, error, 'Failed to Login')
    }
}