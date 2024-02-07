import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const links = ["Home", "About", "Contact", "Blog"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full sticky flex py-6 justify-between items-center navbar">
      <h2 className="text-white md:font-bold font-inter cursor-pointer hover:text-yellow">
        JustAnotherUiKit
      </h2>

      <ul className="list-none hidden sm:flex gap-7 font-light">
        {links.map((link, index) => (
          <li
            onClick={() => setActive(link)}
            className={` ${
              active === link ? "font-bold text-yellow" : "text-white"
            } font-inter cursor-pointer py-2`}
          >
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex relative">
        <CiMenuBurger
          className={` p-[2px] ${
            toggle ? " text-black  bg-yellow" : "text-white"
          } ${active ? "font-bold" : "font-normal"}  rounded-md`}
          fontSize={28}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={` absolute rounded-lg right-0 top-10 px-5 py-5 w-[250px] border-t-[2px] border-b-[2px] border-yellow ${
            toggle ? "flex" : "hidden"
          }`}
        >
          <ul className="list-none flex flex-col">
            {links.map((link, index) => (
              <li
                onClick={() => setActive(link)}
                className={` ${
                  active === link ? "font-bold text-yellow" : "text-white"
                } font-inter py-2`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
