import Group from "../models/group.model.js";
import Member from "../models/member.model.js";
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

export const showGroupInfo = async (req, res)=>{
    const {ownerId,groupName} = req.query;
    const groups = await Group.find({owner: ownerId ,name: groupName}).select('intro color');
    res.status(200).json(groups);
};

export const addNewMember = async (req, res)=>{
    const {name, position, profileImgUrl, team} = req.body;
    try {
        if(!name || !position || !profileImgUrl || !team){
            return res.status(400).json({message : "입력 안 된 값 존재"});
        }
        const member = new Member({
            name : name,
            position: position,
            profileImgUrl: profileImgUrl,
            team : team
        });
        await group.save();
        res.status(200).json({message : "멤버 " + name +   " 저장됨"});
    } catch (error) {
        console.log("저장할 수 없음...")
        return res.status(200).json({message : "Internal Error"})
    }
};

export const showAllMember = async (req, res)=>{

    try {
        const {groupName} = req.query;
    if(!groupName){
        return res.status(400).json({message: "그룹 이름이 입력되지 않음"});
    }

    
    const group = await Group.findOne({name: groupName});
    if(!group){
        return res.status(404).json({message : "해당되는 그룹이 없음"});
    }

    const members = await Member.find({team : group._id});
    return res.status(200).json(members);
    } catch (error) {
        console.log("에러 발생");
        return res.status(500).json({message : "Internal Error"});
    }
    
}