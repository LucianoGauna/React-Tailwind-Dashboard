import { IconContext } from 'react-icons';
import { SIDEBAR_AUTH, SIDEBAR_LIST } from '../data/Data';
import React, { useState } from 'react';
import { MdHome } from 'react-icons/md';
import { BsFillPersonFill, BsTable } from 'react-icons/bs';
import {IoMdNotifications} from 'react-icons/io'
import { PiSignInBold } from "react-icons/pi";
import { BiSolidUserAccount } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLinkList, setActiveLinkList] = useState(null);
  const [activeLinkAuth, setActiveLinkAuth] = useState(null);

  const handleLinkClickList = id => {
    setActiveLinkList(id);
    setActiveLinkAuth(null);
  };

  const handleLinkClickAuth = id => {
    setActiveLinkAuth(id);
    setActiveLinkList(null);
  };

  return (
    <aside className="bg-gradient-to-br from-[#20323c] to-[#28404d] fixed -translate-x-80 inset-0 z-20 my-4 ml-4 w-72 text-white rounded-xl transition-transform duration-300 lg:translate-x-0 font-bold text-lh">
      <div className="border-b border-white/20 text-center py-6">
        <a href="#" className="text-lg tracking-wide">
          React Dashboard
        </a>
        <button className="hidden">X</button>
      </div>
      <div className="m-4">
        <ul className="mb-5 flex flex-col gap-4">
          {SIDEBAR_LIST.map(item => (
            <div
              className={`flex gap-3 px-4 py-3 cursor-pointer active:bg-white/30 w-full rounded-lg hover:bg-white/10 items-center ${
                activeLinkList === item.id
                  ? 'bg-gradient-to-tr from-[#337087] to-[#55a5bb]'
                  : ''
              }`}
              onClick={() => handleLinkClickList(item.id)}
              key={item.id}
            >
              <IconContext.Provider value={{ size: '1.5em' }}>
                {React.createElement(eval(item.icon))}
              </IconContext.Provider>
              <Link to={item.to} className="tracking-wide">
                {item.title}
              </Link>
            </div>
          ))}
        </ul>
        <ul className="mb-5 flex flex-col gap-4">
          <p className="text-gray-400 mt-5">AUTH PAGES</p>
          {SIDEBAR_AUTH.map(element => (
            <div
              className={`flex gap-3 px-4 py-3 cursor-pointer active:bg-white/30 w-full rounded-lg hover:bg-white/10 items-center ${
                activeLinkAuth === element.id
                  ? 'bg-gradient-to-tr from-[#337087] to-[#55a5bb]'
                  : ''
              }`}
              onClick={() => handleLinkClickAuth(element.id)}
              key={element.id}
            >
              <IconContext.Provider value={{ size: '1.5em' }}>
                {React.createElement(eval(element.icon))}
              </IconContext.Provider>
              <Link to={element.to} className="tracking-wide">
                {element.title}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
