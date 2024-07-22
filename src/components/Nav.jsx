import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";

const Nav = () => {
  const [active, setActive] = useState("home");

  const handleClick = (label) => {
    setActive(label);
  };

  useEffect(() => {
    const currentPath = window.location.hash;
    if (currentPath) {
      const currentNavLink = navLinks.find(link => link.href === currentPath);
      if (currentNavLink) {
        setActive(currentNavLink.label);
      }
    }
  }, []);

  return (
    <div className="bg-slate-400">
      <header className="padding-x py-8 z-10 w-full bg-slate-50 fixed">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="LOGO" width={130} height={29} />
          </a>
          
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} onClick={() => handleClick(item.label)}>
                <a
                  href={item.href}
                  className={`font-montserrat leading-normal text-lg text-gray-950 ${
                    active === item.label
                      ? 'border-b-2 border-blue-400 shadow-md'
                      : 'border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="max-lg:hidden lg:mr-2 bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-2 rounded-lg font-bold sm:px-4 sm:py-1 mr-3">
            signUp
          </button>
          <button className="max-lg:hidden lg:mr-2 bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-2 rounded-lg font-bold sm:px-4 sm:py-1">
            login
          </button>

          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
