import { generateToken } from "./../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { userId, password, nickname } = req.body;
  try {
    if (!userId || !password || !nickname) {
      return res.status(400).json({
        message: "입력안된 값 존재",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "비밀번호는 6자 이상 입력하세요",
      });
    }
    const user = await User.findOne({userId});
    if(user) return res.status(400).json({
        message : "이미 존재하는 아이디입니다."
    })
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        userId : userId,
        password: hashedPassword,
        nickname : nickname,
    });
    if(newUser){
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            userId : newUser.userId,
            nickname: newUser.nickname,
        });
    } else {
        res.status(400).json({
            message : "허용하지 않는 유저 데이터"
        });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({message : "Internal Server Error"});
  }
};

export const login = async (req, res)=>{
    const {userId, password} = req.body;
    try {
        const user = await User.findOne({userId});
        if(!user){
            return res.status(400).json({
                message : "없는 아이디임"
            })
        }
        const isPasswordCorrect =await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "비밀번호 일치하지 않음"
            })
        }
        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            userId : user.userId,
            nickname : user.nickname,
        })
    } catch (error) {
        console.log("Error in login controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try{
      res.cookie("jwt", "", {maxAge: 0});
      res.status(200).json({message : "Logged out successfully"});
    } catch(error){;
      console.log("Error in login controller", error.message);
      res.status(500).json({message: "Internal Server Error"});
    }
  };
export const signout = async (req, res)=>{
  try {
    res.cookie("jwt", "", {maxAge: 0});
    const {userId} = req.body;
    await User.deleteOne({userId});
    console.log("Sign out!")
    res.status(200).json({message : "Sign out successfully"});
  } catch (error) {
    console.log("Error in signout controller : ", error.message);
    res.status(500).json({
      message : "Internal Server Error"
    })
  }
}

  export const checkAuth = (req, res)=>{
    try{
      res.status(200).json(req.user);
    } catch(error){
      console.log("Error in checkAuth controller", error.message);
      res.status(500),json({message : "Internal Server Error"});
    }
  }