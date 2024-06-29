'use client'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'

import { usePathname, useRouter } from '@/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const LANGUAGES = {
  vi: {
    flag: '/flag-vi.svg',
    code: 'vi',
    name: 'Tiếng Việt'
  },
  en: {
    flag: '/flag-en.svg',
    code: 'en',
    name: 'English'
  }
}

const SwitchLanguage = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (code: string) => {
    router.push(pathname, { locale: code })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='flex items-center gap-1 focus-visible:ring-0 focus-visible:ring-offset-0'>
        <Button size="sm" variant="outline" className='bg-transparent hover:bg-transparent dark:hover:text-slate-500 border-none text-black dark:text-white'>
          {
            <Image
              width={24}
              height={24}
              alt='flag'
              src={LANGUAGES[locale as keyof typeof LANGUAGES].flag}
            />
          }
          {LANGUAGES[locale as keyof typeof LANGUAGES].name}
          <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(LANGUAGES).map(([key, { code, flag, name }]) => {
          return (
            <DropdownMenuItem
              className='flex gap-1'
              key={key}
              onClick={() => {
                handleLanguageChange(code)
              }}
            >
              <Image width={24} height={24} alt='flag' src={flag} />
              {name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SwitchLanguage
