import Logo from "../components/Logo";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const SignUpPage = () => {
  return (
    <>
      <div className="container flex items-center flex-col">
        <Logo />
        <form className="mt-10 flex flex-col gap-2 ">
          <TextField
            className={"bg-green-100 w-80 rounded-sm"}
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
          <TextField
            className="bg-green-100 w-80 rounded-sm"
            id="filled-password-input"
            label="pw를 다시 입력해주세요"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            className={"bg-green-100 w-80 rounded-sm"}
            id="filled-basic"
            label="별명을 입력해주세요"
            variant="filled"
          />
          <Button sx={{backgroundColor: "#C2FFFB", color: "black"}} variant="contained">SIGNUP</Button>
        
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
