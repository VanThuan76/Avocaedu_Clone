"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { ThemeToggle } from '@/components/theme-toggle'
import MenuBar from './menu-bar'
import Logo from './logo'
import Menu from './menu'
import SwitchLanguage from './switch-language'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const params = useParams()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <section
      className={`w-full flex justify-center items-center sticky top-0 z-50 gap-2 md:gap-5 transition ${isScrolled
        ? 'bg-white border border-b-green-400 bg-opacity-100 duration-500 ease-in-out '
        : 'absolute inset-0 duration-500 ease-in-out'
        }`}
    >
      <div className='px-8 md:px-14 w-screen flex justify-between items-center'>
        <Logo />
        <div className='flex justify-end items-center gap-5'>
          <Menu className={isScrolled ? 'text-black' : params.courseId ? 'text-black dark:text-white' : 'text-black'} />
          <SwitchLanguage className={isScrolled ? 'text-black' : params.courseId ? 'text-black dark:text-white' : 'text-black'} />
          <ThemeToggle className={isScrolled ? 'text-black' : params.courseId ? 'text-black dark:text-white' : 'text-black'} />
          <MenuBar />
        </div>
      </div>
    </section >
  )
}

export default Navbar
