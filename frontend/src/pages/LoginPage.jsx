import Logo from "../components/Logo";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const LoginPages = () => {
  return (
    <>
      <div className="container flex items-center flex-col">
        <Logo />
        <form className="mt-10 flex flex-col gap-2 ">
          <TextField
            className={'bg-green-100 w-80 rounded-sm'}
            id="filled-basic"
            label="id를 입력해주세요"
            variant="filled"
          />
          <TextField
            className="bg-green-100 w-80 rounded-sm"
            id="filled-password-input"
            label="pw를 입력해주세요"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <Button sx={{backgroundColor: "#C2FFFB", color: "black"}} variant="contained">LOGIN</Button>
        </form>
        <div className="mt-5">
          <Link to="/signup">회원가입 하러가기</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPages;
