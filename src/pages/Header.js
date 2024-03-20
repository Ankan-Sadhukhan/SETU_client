import React, { useState } from "react";
import logo from "./logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header flex border-b-2 w-full items-center bg-black dark:bg-dark h-16 p-1`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              {/* <img
                src={logo}
                alt="logo"
                className="dark:hidden"
              /> */}
              <img
                className="h-16"
                src={logo}
                alt="logo"
                
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              
            </div>
            <div className=" justify-end pr-16 sm:flex lg:pr-0 card-actions text-black p-8">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in as ADMIN
              </a>

              <a
                href="/#"
                className="text-b rounded-md bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90 btn btn-primary bg-yellow-400 text-black p-2 rounded-lg"
              >
                Talk With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
