import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'

const Missions = () => {
  const t = useTranslations('LandingPage')

  return (
    <div className='p-4 shadow-custom-missons rounded-xl border-2 border-[#bcd2c4]'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Image height={50} width={50} alt='mission' src='/dataImages/course/icon_missions.png' />
          <div className='flex flex-col'>
            <span>{t('course.candidateSurvey')}</span>
            <Badge className='bg-slate-300 text-slate-700 text-center hover:bg-slate-100'>{t('course.survey')}</Badge>
          </div>
        </div>

        <div>
          <Image height={25} width={25} alt='mission' src='/dataImages/course/icon_check.png' />
        </div>
      </div>
      <div className='py-2 px-14'>
        <span className='text-[#059212] font-semibold'>{t('course.contentMission')}</span>
      </div>
      <div className='py-2 px-14 flex justify-start items-center gap-4 '>
        <div className='flex flex-col justify-start items-start gap-2'>
          <span className='font-semibold'>{t('course.point')}</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/dataImages/course/icon_star.png' />
            <span className='text-sm'>40</span>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <span className='font-semibold'>{t('course.spin')}</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/dataImages/course/icon_star.png' />
            <span className='text-sm'>0</span>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <span className='font-semibold'>{t('common.open')}</span>
          <div className='flex items-center gap-2'>
            <Image height={25} width={25} alt='mission' src='/dataImages/course/icon_star.png' />
            <span className='text-sm'>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Missions
