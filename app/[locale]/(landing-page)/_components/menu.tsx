import Link from "next/link"
import { useTranslations } from "next-intl"

import { cn } from "@/shared/lib/utils"
import { dumpMenu } from "@/shared/constants"

const Menu = () => {
    const t = useTranslations('LandingPage')

    return (
        <div className="hidden lg:flex gap-6 justify-center items-center text-black dark:text-white">
            {dumpMenu().map((item, index) => {
                return (
                    <Link key={index} href={item.link} className={cn(index === dumpMenu().length - 1 && 'font-semibold')}>{item.title}</Link>
                )
            })}
        </div>
    )
}

export default Menu