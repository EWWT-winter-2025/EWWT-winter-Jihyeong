import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from './../store/useAuthStore';
import toast from "react-hot-toast";

const AddGroup = () => {
    const { authUser } =useAuthStore();
  const [groupContent, setGroupContent] = useState({
    name: "",
    intro: "",
    color: "",
    owner: authUser._id
  });
  
  const handleSubmit = async ()=>{
    
    try {
        await axiosInstance.post("/group/new", groupContent);
        toast.success("그룹이 성공적으로 등록됨");
    } catch (error) {
        console.log(error);

        if(error.response){
            toast.error(error.response.data.message);
        }
    }
  };
  
  return (
    <div>
      <div className="w-full h-7 mb-3 flex flex-col gap-3 m-7">
        <div className="font-bold text-3xl">+ 그룹 추가</div>
        <div>관심 있는 그룹을 추가해보세요!</div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-9">
            <label>그룹명</label>
            <input
              type="text"
              value={groupContent.name}
              onChange={(e)=> setGroupContent((prev)=> ({ ...prev, name: e.target.value}))}
              placeholder="그룹명을 입력하세요"
              className="rounded-sm w-56 h-10 px-2  text-slate-950"
            />
          </div>
          <div className="flex items-center gap-5">
            <label>그룹 소개</label>
            <input
              value={groupContent.intro}
              type="text"
              onChange={(e)=>{
                setGroupContent((prev)=>({
                    ...prev, intro: e.target.value
                }))
              }}
              placeholder="그룹 소개를 입력하세요"
              className="rounded-sm w-96 h-10 px-2  text-slate-950"
            />
          </div>
          <div className="flex items-center gap-5">
            <label>그룹 색상</label>
            <input
              value={groupContent.color}
              type="color"
              onChange={(e)=>{
                setGroupContent((prev)=>({...prev, color: e.target.value}))
              }}
              className="rounded-full"
            />
          </div>
          
        </div>
        <button onClick={handleSubmit} className="mt-5 w-32 h-24 bg-green-200 text-slate-950 rounded-md">
            그룹 추가하기
          </button>
      </div>
    </div>
  );
};

export default AddGroup;
