import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
  const { authUser } = useAuthStore();
  const { logout } = useAuthStore();
  const { signout } = useAuthStore();

  return (
    <>
      <div className="w-full flex flex-row">
        <div className="h-screen flex w-44 flex-col items-center gap-2">
          <img className="size-32" src="/logo.png" alt="logo" />
          <div>{authUser.userId}님의 공간</div>
          <div>
            <button
              className="w-20 h-8 bg-white rounded-md text-black"
              onClick={logout}
            >
              로그아웃
            </button>
          </div>
        </div>
        <div className="flex content-center items-center justify-center flex-col">
          <div className="w-full flex gap-2 flex-row justify-end">
            <button
            className="m-4 w-20 h-8 bg-white rounded-md text-black"
            onClick={()=>{
              signout(authUser.userId)
            }}
            >
              탈퇴하기
            </button>
          </div>
          <div className="bg-slate-800 w-[1200px] h-[600px] rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
