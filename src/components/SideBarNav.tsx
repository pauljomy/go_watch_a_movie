import React, { useState } from "react";
import {
  Home,
  Film,
  Layers,
  PlusCircle,
  BookOpen,
  Code2,
  ChevronsLeft,
  Divide,
} from "lucide-react";

import movieLogo from "../assets/img/logoipsum-424.svg";

const sideBarItems = [
  { title: "Home", icon: Home },
  { title: "Movies", icon: Film },
  { title: "Genres", icon: Layers },
  { title: "Add Movie", icon: PlusCircle },
  { title: "Manage Catalogue", icon: BookOpen },
  { title: "GraphQL", icon: Code2 },
];

const SideBarNav = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("Home");

  return (
    <nav
      className={`border-r border-slate-300  h-screen p-3 ${open ? "w-68" : "w-fit"}`}
    >
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src={movieLogo} className="size-9" alt="" />
            {open && <h1 className="text-2xl font-bold">Watch Movie</h1>}
          </div>
          <div>
            {sideBarItems.map((item) => {
              return (
                <div
                  className={`flex h-12 p-2 items-center ${open ? "gap-4 " : " w-fit justify-center "} mb-1 hover:bg-slate-100 hover:rounded-sm ${selected === item.title ? "bg-indigo-100 text-indigo-800 rounded-sm" : "text-slate-500 hover:bg-slate-100"}`}
                  onClick={() => setSelected(item.title)}
                >
                  <item.icon size={26} />
                  {open && <span className={`text-xl`}>{item.title}</span>}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div
            className={`flex items-center ${open ? "gap-4" : "w-fit justify-center"}`}
          >
            <ChevronsLeft
              size={24}
              className={`transition-transform duration-300 ${open ? "" : "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            {open && <span className={`text-xl`}>Hide</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBarNav;
