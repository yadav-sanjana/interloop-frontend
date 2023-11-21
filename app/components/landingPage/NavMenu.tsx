import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
    return (
        <div>
            <nav className="bg-gray-50 flex items-center">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center gap-8">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline" aria-current="page">Business Automation</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">Finance Solution</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">HR Solution</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">Compilance Management</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">CSR</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">Our Story</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <div className="text-gray-900 dark:text-white hover:underline">Contact us</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavMenu
