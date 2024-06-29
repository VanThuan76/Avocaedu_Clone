'use client'
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { dumpMenu } from "@/shared/constants";

const MenuBar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(true);
    const pathName = usePathname()

    return (
        <React.Fragment>
            <Menu className='block md:hidden w-[24px] h-[24px] cursor-pointer' color="black" onClick={() => setIsToggleOpen(!isToggleOpen)} />
            {!isToggleOpen && <X className='absolute top-3 right-5 z-50 md:hidden w-[24px] h-[24px] cursor-pointer' onClick={() => setIsToggleOpen(!isToggleOpen)} />}
            <ul
                className={`col-span-4 w-full absolute top-0 left-0 bg-[#1B3864] px-4 py-4 md:px-0 md:pb-0 md:pt-5 justify-center items-center md:justify-center md:items-start gap-5 text-center flex flex-col md:flex-row md:relative md:border-b laptop:border-b-gray-100 ${isToggleOpen ? 'hidden' : 'flex'
                    }`}
            >
                {dumpMenu().map((item, inx) => (
                    <Link href={item.link} key={inx} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                        <li className={`text-sm ${pathName === item.link && 'pb-2 border-b border-b-gray-200'}`}>
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default MenuBar;