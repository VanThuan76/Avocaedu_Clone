'use client'

import * as React from "react"
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { BookText, CalendarCheck, Clock, Languages, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { ICourse } from "@/@types/avocaedu-type"
import { parseDescriptionCourseStyleOne, parseDescriptionCourseStyleTwo } from "@/shared/utils/helpers/parseDataCourse";
import { formatCurrencyVN } from "@/shared/utils/helpers/formatCurrency";
import { PreImage } from "../pre-image"
function CardCourse({ item, type }: { item: ICourse, type: 'fat' | 'ai' }) {
    const locate = useLocale()
    const t = useTranslations('LandingPage')

    return (
        <Card className="w-full md:w-[350px] rounded-2xl shadow-xl">
            <CardHeader className="p-2">
                <div className="w-full h-full">
                    <PreImage width={1280} height={200} src={item.image as string} alt={item.title} className='w-full rounded-2xl object-cover object-center' />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <div className="w-full flex flex-wrap justify-start items-start gap-3">
                    {item.hashtag.length > 0 && item.hashtag.map((tag, index) => {
                        return <Badge key={index} className="bg-[#58cc05] hover:bg-[#98e95e] cursor-pointer">{tag}</Badge>
                    })}
                </div>
                <p>{type === 'fat' ? parseDescriptionCourseStyleOne(item.description) : parseDescriptionCourseStyleTwo(item.description)}</p>
                <div className="w-full flex justify-start items-center gap-5">
                    <div className="flex justify-between items-center gap-1">
                        <BookText className="w-[18px] h-18px]" />
                        <p className="text-sm font-semibold">{item.lessons[0]} {t('course.lessons')}</p>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                        <Languages className="w-[18px] h-18px]" />
                        <p className="text-sm font-semibold">{item.language}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <Clock className="w-[18px] h-18px]" />
                    <p className="text-sm font-semibold">{item.duration} {t('course.hours')}</p>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <CalendarCheck className="w-[18px] h-18px]" />
                    <p className="text-sm font-semibold"> {t('course.startDate')}:  {item.start_at}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <p className="text-zinc-400 text-sm"> {t('common.avocaEdu')}</p>
                    <div className="flex justify-center items-center gap-1">
                        {Array.from({ length: 5 }, (_, index) => {
                            return (
                                <Star key={index} fill="#FADB14" color="#FADB14" />
                            )
                        })}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center gap-1">
                <p className="text-lg font-semibold">{formatCurrencyVN(item.price)}</p>
                <Link href={`/${locate}/course/${item.id}`}>
                    <Button className="bg-[#58cc05] hover:bg-[#98e95e]">
                        {t('common.enroll')}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
export default CardCourse
