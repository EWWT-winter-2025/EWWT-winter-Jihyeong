import {Navigate, Route, Routes} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthStore } from './store/useAuthStore';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });
  if (isCheckingAuth && !authUser)
      return (
    <div>잠시만 기다려주세요요</div>);
  return (
    <>
    <Routes>
      <Route path="/signup" element= {!authUser ? <SignUpPage /> : <Navigate to="/"/>} />
      <Route path="/login" element= {!authUser ? <LoginPage /> : <Navigate to="/"/>} />
      <Route path="/" element= {authUser ? <HomePage /> : <LoginPage/>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
