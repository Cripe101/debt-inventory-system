import { useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import { useForm } from "react-hook-form";
import type { IUserPost } from "../interface/IUser";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../api/user";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const user = useForm<IUserPost>();
  const [conPass, setConPass] = useState<string>("");

  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      toast.success(`User ${data.firstName} added successfully!`);
      //   navigate("/admin/employees");
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data: IUserPost) => {
    if (!(data.password === conPass)) {
      return toast.error("password dont match");
    }

    // console.log(data);
    addUserMutation.mutate({ ...data, roles: "vendor" });
  };
  return (
    <div>
      <div className="grid gap-2 w-full p-5 bg-white/35 rounded-2xl">
        <h1 className="text-center mb-3">Welcome, Signup here!!</h1>
        <form
          onSubmit={user.handleSubmit(onSubmit)}
          className="flex flex-col justify-between gap-3"
        >
          <InputComponent
            label="*First Name*"
            placeholder="First Name"
            register={user.register("firstName")}
            required={true}
          />
          <InputComponent
            label="*Last Name*"
            placeholder="Last Name"
            register={user.register("lastName")}
            required={true}
          />
          <InputComponent
            label="*Email*"
            placeholder="Email"
            register={user.register("email")}
            type="email"
            required={true}
          />
          <InputComponent
            label="*Phone*"
            placeholder="Phone"
            register={user.register("phone")}
            required={true}
          />
          <InputComponent
            label="*Username*"
            placeholder="Username"
            register={user.register("username")}
            required={true}
          />
          <InputComponent
            label="*Password*"
            placeholder="Password"
            register={user.register("password")}
            type="password"
            required={true}
          />
          <InputComponent
            label="*Confirm Password*"
            placeholder="Confirm Password"
            onChange={setConPass}
            type="password"
            required={true}
          />

          <button
            type="submit"
            className="bg-blue-700/70 py-2 text-white/90 rounded-xl active:scale-90 duration-200"
          >
            Submit
          </button>
        </form>
        <h1 className="text-xs font-bold text-center">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="ml-2 border border-green-700/80 font-semibold text-green-700/80 p-1 rounded-xl active:scale-90 duration-200"
          >
            Login here
          </button>
        </h1>
      </div>
    </div>
  );
};

export default SignupPage;
