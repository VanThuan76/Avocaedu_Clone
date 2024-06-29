'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { BookText, Calendar, Clock, Languages } from 'lucide-react'

import ReactStars from 'react-rating-star-with-type'

import { formatVND } from '@/shared/lib/utils'
import { Button } from '@/components/ui/button'
import { ICourseDetail } from '@/@types/avocaedu-type'

interface CourseCardProps {
  course: ICourseDetail
}
const CourseCard = ({
  course
}: CourseCardProps) => {
  const t = useTranslations('LandingPage')
  const src = course.image
  return (
    <div className='shadow-custom rounded-xl bg-background w-[400px] overflow-hidden'>
      <div className='aspect-video '>
        <Image
          className='size-full object-cover'
          width={200}
          height={300}
          alt='Image'
          src={src}
          loader={() => src}
        />
      </div>
      <div className='flex gap-1 items-center p-4'>
        <span className='underline font-semibold text-3xl'>đ</span>
        <span className='font-bold text-3xl'>{formatVND(course.price)}</span>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-green-700 hover:bg-green-600 w-full text-transform: capitalize; text-white'>
          {t('course.buyForMe')}
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-amber-400 hover:bg-amber-300 w-full text-transform: capitalize; text-white'>
          {t('course.buyForTeam')}
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <Button className='bg-sky-500 hover:bg-sky-400 w-full text-transform: capitalize; text-white'>
          {t('course.applyScholarship')}
        </Button>
      </div>
      <div className='px-4 pt-2'>
        <div className='flex items-center gap-2'>
          <h2>{t('course.mentoringGroup')}:</h2>
          <Link href='/'>
            <Image height={24} width={24} src='/dataImages/course/icon_fb.png' alt='facebook' />
          </Link>
          <Link href='/'>
            <Image height={24} width={24} src='/dataImages/course/icon_zalo.png' alt='zalo' />
          </Link>
        </div>
      </div>

      <div className='flex flex-col gap-2 pt-2 px-4'>
        <div>
          <h2>{t('course.thisCourseInclude')}:</h2>
        </div>
        <div className='flex gap-2'>
          <div className='flex gap-1 items-center font-medium'>
            <BookText size={18} />{course.lessons.length} {t('course.lessons')}
          </div>
          <div className='flex gap-1 items-center font-medium'>
            <Languages size={18} />
            {course.language}
          </div>
          <div className='flex gap-1 items-center font-medium'>
            <Clock size={18} /> {course.duration} {t('course.lessons')}
          </div>
        </div>
      </div>
      <div className='flex gap-2 pt-2 px-4'>
        {course.hashtag.map((hashtag, index) => (
          <div key={index} className='px-2 font-normal rounded-lg border-sky-600 border-2'>{hashtag}</div>

        ))}
      </div>
      <div className='flex justify-between pt-2 px-4'>
        <div className='flex gap-1 items-center font-medium'>
          <Calendar size={18} />
          {t('course.startDate')}: {course.start_at}
        </div>
        <ReactStars value={course.ave_rating} isEdit={false} activeColors={['yellow']} />
      </div>
      <div className='flex justify-between pt-2'></div>
    </div>
  )
}

export default CourseCard
