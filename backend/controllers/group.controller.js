import Group from "../models/group.model.js";
export const newgroup = async(req, res)=>{
    const {name, intro, color, owner} = req.body;
    try {
        if(!name || !intro || !color || !owner){
            return res.status(400).json({message: "입력 안 된 값 존재"});
        }
        const originGroup = await Group.findOne({
            name: name,
            owner: owner
        });
        if(originGroup){
            return res.status(409).json({message: "이미 존재하는 값입니다."});
        }
        const group = new Group({
            name : name,
            intro : intro,
            color : color,
            owner : owner
        });
        await group.save();
        res.status(200).json({message : "저장 완료"});
    } catch (error) {
        console.log("저장할 수 없음");
    }

};

export const showGroupName = async (req, res)=>{
    const {owner} = req.query;
    const groups = await Group.find({owner: owner}).select('id name');
    res.status(200).json(groups);
};