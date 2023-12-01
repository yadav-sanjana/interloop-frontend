'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../../public/carasoul images/interloop logo.jpg';
import Image from 'next/image';
import NavMenu from './NavMenu';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 px-4">
                <div className="flex flex-row justify-between items-center mx-auto max-w-screen-3xl pt-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link href="#">
                            <Image src={logo} alt='logo' height={200} width={200} />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="block lg:hidden focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                        <NavMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
