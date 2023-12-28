import React, { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const [isSticky, SetIsSticky] = useState(false);

  const { user } = useContext(AuthContext);

  console.log(user);
  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetIsSticky(true);
      } else {
        SetIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navItems links here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
    { link: "Sell your Book", path: "/admin/dashboard" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}

          <Link
            to="/"
            className="text-4xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" /> Kitaab
          </Link>

          {/* nav item for large device */}

          <ul className="md:flex space-x-12 hidden">
            {/* {navItems.map(({ link, path }) => {
              <Link key={path} to={path} className="block text-base text-black">
                {link}
              </Link>;
            })} */}
            {navItems.map(({ link, path }) => {
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* btn for large devices*/}

          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn for mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-5 text-black hover:text-blue-700" />
              ) : (
                <FaBarsStaggered className="w-5  text-black hover:text-blue-700 " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          <ul>
            {navItems.map(({ link, path }) => {
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className="block text-base text-white uppercase cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
