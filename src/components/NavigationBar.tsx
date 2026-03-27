import React from "react";

const NavigationBar = () => {
  return (
    <header className="p-4 border-b border-slate-300 h-18 flex-1">
      <div className="flex justify-between">
        <input
          type="search"
          placeholder="Type something.."
          className="rounded-sm text-xl p-2 outline-none border border-slate-500 w-90"
        />
        <button className="px-6 py-2 bg-blue-500 text-white font-inherit rounded-sm text-xl">
          Log In
        </button>
      </div>
    </header>
  );
};

export default NavigationBar;
