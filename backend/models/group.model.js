import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        intro:{
            type: String,
            required: true
        },
        color:{
            type: String,
            required: true,
        },
        owner:{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        }
    }

);
const Group = mongoose.model("Group", GroupSchema);
export default Group;