import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between flex-wrap bg-redorange p-6 fixed  w-full z-50`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span
          className={`font-semibold text-xl tracking-tight text-stroke hover:text-main`}
        >
          <Link href="/">
          Nikholas Pcenicni
          </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className={`flex items-center px-3 py-2 border rounded text-stroke border-stroke w-10`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="mx-auto" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="mx-auto" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } relative w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {links.map((link) => (
            <Link
              href={link.href}
              className={`block mt-4 lg:inline-block lg:mt-0 text-stroke hover:text-main mr-4`}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
