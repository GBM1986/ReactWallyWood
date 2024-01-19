import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const content = (
    <div className="absolute left-0 right-0 block w-full bg-white transition lg:hidden top-[120px] z-20">
      <ul className="p-20 text-xl text-center">
        <Link to="/">
          <li className="py-4 my-4 border-b  cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">HOME</li>
        </Link>
        <Link to="/plakater">
          <li className="py-4 my-4 border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">PLAKATER</li>
        </Link>
        <Link to="/omos">
          <li className="py-4 my-4 border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">OM OS</li>
        </Link>
        <Link to="/kontakt">
          <li className="py-4 my-4 border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">KONATAKT</li>
        </Link>
        <Link to="/login">
              <li className="py-4 my-4 border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">LOGIN</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-white max-w-[1400px] m-auto">
      <div className="z-50 flex justify-between items-center flex-1 px-10 py-4 ml-auto h-10vh lg:py-1 border-b-2 bg-white border-orange max-w-[1000px] m-auto">
        <div className="flex items-center">
          <h2 className="text-[54px] font-black text-orange font-titillium-web whitespace-pre">WallyWood</h2>
        </div>
        <div className="hidden lg:flex md:flex">
          <ul className="flex gap-8 text-[14px]">
            <Link to="/">
              <li className="pr-4 transition cursor-pointer text-darkGray  hover:text-orange">HOME</li>
            </Link>
            <Link to="/advokatrerne">
              <li className="pr-4 transition cursor-pointer text-darkGray  hover:text-orange">PLAKATER</li>
            </Link>
            <Link to="/omleolov">
              <li className="pr-4 transition cursor-pointer whitespace-pre text-darkGray  hover:text-orange">OM OS</li>
            </Link>
            <Link to="/kontakt">
              <li className="transition cursor-pointer text-darkGray  hover:text-orange">KONATAKT</li>
            </Link>
            <Link to="/login">
              <li className="transition cursor-pointer text-darkGray  hover:text-orange">LOGIN</li>
            </Link>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden md:hidden">
          {click && content}
          <button className="block transition text-primary" onClick={() => setClick(!click)} style={{ zIndex: 100 }}>
            {click ? <FaTimes /> : <CiMenuBurger />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
