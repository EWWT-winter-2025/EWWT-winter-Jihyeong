import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AddGroup from "../components/AddGroup";
import { axiosInstance } from "../lib/axios";

const HomePage = () => {
  const { authUser } = useAuthStore();
  const { logout } = useAuthStore();
  const { signout } = useAuthStore();

  const [selectedPage, setSelectedPage] = useState(false);

  const [groups, setGroups] = useState([]);
  const getGroups = async () => {
    const res = await axiosInstance.get("/group/name", {
      params: {
        owner: authUser._id,
      },
    });
    setGroups(res.data);
  };

  useEffect(() => {
    getGroups();
  }, [authUser]);

  return (
    <>
      <div className="w-full flex flex-row">
        <div className="h-screen flex w-44 flex-col items-center gap-2">
          <img className="size-32" src="/logo.png" alt="logo" />
          <div>{authUser.userId}님의 공간</div>
          <div className="flex flex-col gap-2">
            <button
              className="w-20 h-8 bg-white rounded-md text-black"
              onClick={logout}
            >
              로그아웃
            </button>
            <div className="h-0.5 my-3 w-full bg-white"></div>
            <div>
              <div
                onClick={() => {
                  setSelectedPage(false);
                }}
              >
                + 그룹 추가
              </div>
              {groups.length > 0
                ? groups.map((group, index) => <div key={index}>{group.name}</div>)
                : ""}
            </div>
          </div>
        </div>
        <div className="flex content-center items-center justify-center flex-col">
          <div className="w-full flex gap-2 flex-row justify-end">
            <button
              className="m-4 w-20 h-8 bg-white rounded-md text-black"
              onClick={() => {
                signout(authUser.userId);
              }}
            >
              탈퇴하기
            </button>
          </div>
          <div className="bg-slate-800 w-[1200px] h-[600px] rounded-md">
            {!selectedPage ? <AddGroup /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
