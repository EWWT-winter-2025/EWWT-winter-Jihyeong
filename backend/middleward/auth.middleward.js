import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next)=>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                message : "토큰 없음",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                message: "허용되지 않은 토큰",
            })
        }
        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({
                message : "유저를 찾을 수 없음",
            });

        }
        req.user = user;

        next();
    } catch (error) {
        console.lof(error);
        res.status(500).json({
            message: "Internal error"
        })
        
    }
}