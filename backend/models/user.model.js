import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required : true,
            unique : true,
        },
        nickname:{
            type: String,
            required : true,
        },
        password : {
            type: String,
            required : true,
            minlength: 6,
        },

    },
    {timestamps : true}
);

const User = mongoose.model("User", UserSchema);