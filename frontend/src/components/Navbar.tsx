const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white border-b border-b-slate-200 py-5 px-10">
      <div className="font-bold text-xl text-slate-700">
        <h1>Debt System</h1>
      </div>
      <div className="flex flex-row-reverse gap-5 text-lg font-bold">
        <button>Home</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
