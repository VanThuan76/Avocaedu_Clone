"use client"
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { useTranslations } from "use-intl"

import { Button } from "@/components/ui/button"
import { cn } from "@/shared/lib/utils"
import { ILesson } from "@/@types/avocaedu-type"

import Missions from "./missions"
import Rewards from "./rewards"

interface LessionItemProps {
    isLast?: boolean
    lesson: ILesson,
    current: number,
    setCurrent: (id: number) => void
}

const LessionItem = ({
    isLast = false,
    lesson,
    current,
    setCurrent

}: LessionItemProps) => {
    const t = useTranslations('LandingPage')
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={cn("flex items-center p-2 cursor-pointer", isLast || "border-b border-slate-500")}
                onClick={() => {
                    if (isOpen) {
                        setCurrent(-1)
                    } else {
                        setCurrent(lesson.id)
                    }
                    setIsOpen(!isOpen)
                }}
            >
                <ChevronRight size={20} className={
                    cn(
                        "text-slate-500",
                        current === lesson.id && "rotate-90 transition duration-300"
                    )} />
                <span className="font-light text-base">
                    {lesson.title} - {t('course.mission')} {lesson.num_mission}
                </span>
            </div>
            <div className={cn(
                "h-0 overflow-hidden animate-in transition-all duration-300 px-4",
                current === lesson.id && "h-auto py-4 border-b border-slate-500",
            )}>
                <iframe width="700" height="400" src="https://www.youtube.com/embed/vqo97B350_A" title="Becoming an AI Developer (The Truth)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">{t('course.document')}</span>
                    <Button className="bg-[#06D001] w-[120px] rounded-full">{t('course.enterDocument')}</Button>
                    <span>*{t('course.clickDocument')}</span>
                </div>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">{t('course.overview')}</span>
                    <div className='mt-2 font-light text-base' dangerouslySetInnerHTML={{ __html: lesson.description }}>
                    </div>
                </div>

                <div className="mt-2 flex flex-col">
                    <span className="font-semibold">{t('course.outcome')}</span>
                    <div className='mt-2 font-light text-base' dangerouslySetInnerHTML={{ __html: lesson.detail ?? '' }}>
                    </div>
                </div>

                <div className="mt-2 flex flex-col gap-4">
                    <span className="font-semibold">{t('course.mission')}</span>
                    <Missions />
                    <Missions />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                    <span className="font-semibold">{t('course.rewards')}</span>
                    <Rewards />
                    <Rewards />
                </div>
            </div>
        </div>
    )
}

export default LessionItem