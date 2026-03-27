import React from "react";
import {
  Home,
  Film,
  Layers,
  PlusCircle,
  BookOpen,
  Code2,
  PanelLeftClose,
  PanelLeftOpen,
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
  return (
    <nav className="border-r border-slate-300">
      <div>
        <div>
          <img src={movieLogo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default SideBarNav;
