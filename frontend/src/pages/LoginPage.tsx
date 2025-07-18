import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authState } from "../store/auth";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import InputComponent from "../components/InputComponent";
import type { IUser } from "../interface/IUser";

const LoginPage = () => {
  const [userPass, setUserPass] = useState<string>("");
  const [userUsn, setUserUsn] = useState<string>("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      // console.log(res);
      authState.token = res.token;
      const user = jwtDecode<IUser>(res.token);
      authState.user = user;
      toast.success("Login Successfully");
      navigate("/home");
    },
    onError: () => {
      toast.error("Invalid credentials", { type: "error" });
    },
  });

  const proceedLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userUsn && userPass) {
      mutation.mutate({ username: userUsn, password: userPass });
    }
  };
  return (
    <div className="">
      <div className="grid gap-2 w-full p-5 bg-white/35 rounded-2xl">
        <h1 className="text-center mb-3">Welcome, Login here!!</h1>
        <form
          onSubmit={proceedLogin}
          className="flex flex-col justify-between gap-3"
        >
          <InputComponent
            label="*Username*"
            placeholder="Username"
            onChange={setUserUsn}
          />
          <InputComponent
            label="*Password*"
            placeholder="Password"
            type="password"
            onChange={setUserPass}
          />

          <button
            type="submit"
            className="bg-blue-700/70 py-2 text-white/90 rounded-xl active:scale-90 duration-200"
          >
            Login
          </button>
        </form>
        <h1 className="text-xs font-bold text-center">
          Don't have an account?{" "}
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="ml-2 border border-green-700/80 font-semibold text-green-700/80 p-1 rounded-xl active:scale-90 duration-200"
          >
            Signup here
          </button>
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
