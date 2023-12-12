import { HiOutlineMenu } from 'react-icons/hi';
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSettings, IoMdNotifications } from 'react-icons/io';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();
console.log(location.pathname);

  function capitalizeFirstLetter(string) {
    if(string === ""){
      string = "Home"
    } else if(string === "signIn") {
      string = "Sign In"
    } else if(string === "signUp") {
      string = "Sign Up"
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function handleMenu() {
    setActiveMenu(!activeMenu);
  }
  return (
    <nav className="w-full max-w-full bg-transparent py-1">
      <div className="flex flex-col-reverse justify-between md:items-center gap-6 md:flex-row">
        <div>
          <a href="#" className="text-gray-400 text-md">
            Dashboard / {capitalizeFirstLetter(location.pathname.slice(1))}
          </a>
          <strong className="block">{capitalizeFirstLetter(location.pathname.slice(1))}</strong>
        </div>
        <div className="flex items-center justify-between">
          <div className="mr-auto sm:mr-4 sm:w-56">
            <div className="w-full min-w-[200px] h-10">
              <input
                type="text"
                placeholder="Type here"
                className="w-full h-full bg-transparent text-gray-700 border text-sm px-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-5 text-md sm:text-lg text-gray-400">
            <button className="lg:hidden" onClick={handleMenu}>
              <HiOutlineMenu />
            </button>
            <a href="#">
              <FaCircleUser />
            </a>
            <button>
              <IoMdSettings />
            </button>
            <button>
              <IoMdNotifications />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
