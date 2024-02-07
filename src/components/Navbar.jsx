import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const links = ["Home", "About", "Contact", "Blog"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h2 className="text-white font-inter cursor-pointer hover:text-yello">
        JustAnotherUiKit
      </h2>

      {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === links.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul> */}
      <div className="sm:hidden flex relative">
        <div>
          <CiMenuBurger
            className="text-white bg-yellow rounded-md"
            fontSize={28}
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
