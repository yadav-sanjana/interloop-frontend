import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

interface NavMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, toggleMenu }) => {

    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (isOpen) {
            menuRef.current?.classList.add('slide-in');
        } else {
            menuRef.current?.classList.remove('slide-in');
        }
    }, [isOpen]);
    
    const menuItems = (
        <ul ref={menuRef} className="lg:flex sm:gap-2 md:gap-2 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-4 rtl:space-x-reverse text-base">
            <li>
                <Link href="#">
                    <div className="text-gray-900 hover:underline" aria-current="page">Business Automation</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">Finance Solution</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">HR Solution</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">Compilance Management</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">CSR</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">Our Story</div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="text-gray-900  hover:underline">Contact us</div>
                </Link>
            </li>
        </ul>
    );
    return (
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
            <nav className="bg-white border-gray-200 px-4 flex items-center">
                <div className="max-w-screen-3xl px-4 py-3 mx-auto">
                    <div className="lg:flex lg:items-center mt-4 lg:mt-0">
                        {isOpen ? (
                            <nav className="bg-white border-gray-200 px-4">
                                {menuItems}
                            </nav>
                        ) : (
                            <div className="flex items-center space-x-8 rtl:space-x-reverse">
                                {menuItems}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavMenu
