const mongoose=require('mongoose');

const User= mongoose.model('User',new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    middleName:String,
    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.']
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true
    },
    citizenshipNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true
    },
    wardNumber:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },

}))

exports.user = User;