import { FC } from "react";
import {  FaRegMessage } from "react-icons/fa6";

interface LoginProps {}
const Login: FC<LoginProps> = () => {
  return (
    <div className="bg-[#4EAC6D] min-h-screen p-10 overflow-hidden ">
      <div className="flex justify-between gap-20">
        <div className="leading-10">
          <div className="flex gap-3">
            <FaRegMessage className="text-white text-3xl " />
            <h1 className="text-2xl font-medium text-white">Let's Chat!</h1>
          </div>
          <h1 className="capitalize text-[#9ED5B2] ">
            come and enjoy with friends
          </h1>
        </div>
        <div className="bg-[#fff] w-[70%]  h-[91vh] rounded-2xl ">
          
        </div>
      </div>
    </div>
  );
};

export default Login;
