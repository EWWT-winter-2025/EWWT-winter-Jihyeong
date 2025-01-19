import { create } from "zustand";
import toast from "react-hot-toast";
import {axiosInstance} from "../lib/axios.js"
export const useAuthStore = create((set)=>({
    authUser: null,
    isSigningUp: false,
    isLoggingIng : false,
    isUpdatingProfile : false,

    isCheckingAuth : true,
    checkAuth : async ()=>{
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser : res.data});
        } catch (error) {
            console.log(error);
            set({authUser: null});
        } finally {
            set({isCheckingAuth: false});
        }
    },
    signup: async (data) => {
        set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("회원가입 완료");
      
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
    },
    login: async (data)=>{
      set({isLoggingIng : true});
      try {
        const res =  await axiosInstance.post("/auth/login", data);
        set({authUser : res.data});
        toast.success("로그인 완료");
      } catch (err){
        toast.error(err.response.data.message);
      } finally {
        set({isLoggingIng:false});
      }
    },
    logout: async () =>{
      try {
        await axiosInstance.post("/auth/logout");
        set({ authUser : null });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
}));
