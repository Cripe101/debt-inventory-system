import { FiUser, FiList } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { authState } from "../store/auth";
import { useState } from "react";

const Homepage = () => {
  const navigate = useNavigate();
  const user = authState.user;
  const [click, setClick] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-full p-2">
      {/* User Icon */}
      <section className="relative flex items-center">
        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          className={`${
            click ? "left-22 bg-red-800" : "left-1"
          } absolute py-1.5 px-3 rounded-2xl border border-white/90  font-semibold font-sans text-sm text-white active:scale-90 duration-300`}
        >
          Logout
        </button>
        <button
          type="button"
          onClick={() => {
            setClick(!click);
          }}
          className="flex items-center justify-center gap-1 w-20 text-center text-sm sticky border border-black/35 bg-white/35 backdrop-blur-md p-2 rounded-2xl text-blue-800 font-snas font-semibold left-0 active:scale-90 duration-200"
        >
          <FiUser size={18} />
          {user.username}
        </button>
      </section>
      <div className="w-full grid gap-3">
        <section className="grid grid-cols-2 gap-3 text-2xl font-sans">
          <h1 className="flex flex-col w-full text-center p-5 backdrop-blur-md bg-white/35 rounded-2xl">
            <p className="text-sm font-sans font-semibold">Total Debt</p>
            <p className="font-bold font-sans text-red-700">₱ 00.00</p>
          </h1>
          <h1 className="flex flex-col w-full text-center p-5 backdrop-blur-md bg-white/35 rounded-2xl">
            <p className="text-sm font-sans font-semibold">Total Paid Debt</p>
            <p className="font-bold font-sans text-green-700">₱ 00.00</p>
          </h1>
        </section>
        <section className="bg-white/35 w-full rounded-2xl p-5">
          <span className="flex justify-between items-center mb-3">
            <h1 className="text-xs font-bold font-sans">Product List</h1>
            <button
              onClick={() => {
                navigate("/listpage/product-list");
              }}
              className="border border-white bg-blue-500/90 text-white px-3 p-1 text-lg rounded-md active:scale-75 duration-200"
            >
              <FiList />
            </button>
          </span>
          <span className=" grid grid-cols-2 gap-3">
            <h1 className="grid justify-center font-sans bg-white/35 backdrop-blur-md p-2 rounded-2xl">
              <p className="text-xs text-center font-semibold">
                Extro Hot Chili
              </p>
              <img
                className=""
                src="https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png"
                alt="Loading..."
              />
              <p className="text-center text-sm font-bold font-serif">
                ₱ 20.00
              </p>
            </h1>
            <h1 className="grid justify-center font-sans bg-white/35 backdrop-blur-md p-2 rounded-2xl">
              <p className="text-xs text-center font-semibold">Chilimansi</p>
              <img
                className=""
                src="https://res.cloudinary.com/djumpkifp/image/upload/v1752636705/chilimansi_Pancit_Canton_hxldk0.png"
                alt="Loading..."
              />
              <p className="text-center text-sm font-bold font-serif">
                ₱ 20.00
              </p>
            </h1>
          </span>
        </section>
        <section className="bg-white/35 w-full rounded-2xl p-4 flex flex-col gap-1">
          <span className="flex justify-between items-center mb-3">
            <h1 className="text-xs font-bold font-sans">Debtor List</h1>
          </span>
          <span className="grid gap-3">
            <h1 className="grid grid-cols-3 justify-around bg-white/35 py-2 px-4 rounded-2xl">
              <h2 className="grid">
                <p className="text-xs font-bold font-sans">Name</p>
                <p className="font-sans">Mhegz</p>
              </h2>
              <h2 className="grid">
                <p className="text-xs font-bold font-sans"> Debt</p>
                <p className="font-sans">₱ 00.00</p>
              </h2>
              <h2 className="grid">
                <p className="text-xs font-bold font-sans">Date Added</p>
                <p className="font-sans">00-00-0000</p>
              </h2>
            </h1>
            <h1 className="grid grid-cols-3 justify-around bg-white/35 py-2 px-4 rounded-2xl">
              <h2 className="grid">
                <p className="text-xs font-bold font-sans">Name</p>
                <p className="font-sans">Mhegz</p>
              </h2>
              <h2 className="grid">
                <p className="text-xs font-bold font-sans"> Debt</p>
                <p className="font-sans">₱ 00.00</p>
              </h2>
              <h2 className="grid">
                <p className="text-xs font-bold font-sans">Date Added</p>
                <p className="font-sans">00-00-0000</p>
              </h2>
            </h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
