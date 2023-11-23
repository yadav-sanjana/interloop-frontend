import React from 'react'
import Link from 'next/link';
import logo from '../../../public/carasoul images/interloop logo.jpg'
import Image from 'next/image';
import NavMenu from './NavMenu';


const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 px-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
                    <Link href="#">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image
                                src={logo}
                                alt='logo'
                                height={200}
                                width={200} />
                        </div>
                    </Link>
                    <NavMenu/>
                    {/* <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="tel:11111111" className="text-sm text-gray-500  hover:underline"></Link>
                        <Link href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                    </div> */}
                </div>
            </nav>

        </>
    )
}

export default NavBar
