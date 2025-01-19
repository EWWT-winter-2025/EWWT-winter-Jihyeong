import Logo from "../components/Logo";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState(
    {
      userId: "",
      password: "",
      nickname: "",
      confirmPw: "",
    }
  );
  
  const {signup} = useAuthStore();
  const validateForm = ()=>{
    if(!formData.password) return toast.error("비밀번호 입력 필수")
    if(!formData.userId) return toast.error("비밀번호 입력 필수")
    if(formData.password.length < 6) return toast.error("비밀번호 6글자 이상 입력 필수")
    if(!formData.nickname) return toast.error("닉네임 입력 필수");
    if(formData.confirmPw !== formData.password) return toast.error("비밀번호 재입력 확인해주세요")
    return true;
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const success = validateForm();
    if(success===true) signup(formData);
  };
  return (
    <>
      <div className="container flex items-center flex-col">
        <Logo />
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2 ">
          <TextField
            className={"bg-green-100 w-80 rounded-sm"}
            id="filled-basic"
            label="id를 입력해주세요"
            variant="filled"
            value={formData.userId}
            onChange={(e)=>setFormData({...formData, userId: e.target.value})}
          />
          <TextField
            className="bg-green-100 w-80 rounded-sm"
            id="filled-password-input1"
            label="pw를 입력해주세요"
            type="password"
            autoComplete="current-password"
            variant="filled"
            value={formData.password}
            onChange={(e)=>{
              setFormData({...formData, password: e.target.value})
            }}
          />
          <TextField
            className="bg-green-100 w-80 rounded-sm"
            id="filled-password-inpu2t"
            label="pw를 다시 입력해주세요"
            type="password"
            autoComplete="current-password"
            variant="filled"
            value={formData.confirmPw}
            onChange={(e)=> setFormData({...formData, confirmPw: e.target.value})}
          />
          <TextField
            className={"bg-green-100 w-80 rounded-sm"}
            id="filled-basic-nick"
            label="별명을 입력해주세요"
            variant="filled"
            value={formData.nickname}
            onChange={(e)=> setFormData({...formData, nickname: e.target.value})}
          />
          <Button type="submit" sx={{backgroundColor: "#C2FFFB", color: "black"}} variant="contained">SIGNUP</Button>
        
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
