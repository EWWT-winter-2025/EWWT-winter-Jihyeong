import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        position:{
            type: String,
            required: true
        },
        profileImgUrl:{
            type: String
        },
        team:{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Group",
        }
    }

);
const Member = mongoose.model("Memeber", MemberSchema);
export default Member;