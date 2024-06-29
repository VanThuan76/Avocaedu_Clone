import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

const Rewards = () => {
  const t = useTranslations('LandingPage')

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image className='rounded-sm' height={40} width={40} alt='rewards' src='/dataImages/course/icon_rewards.png' />
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{t('course.lootBox')}</h3>
          <span>{t('course.haveSpin')}</span>
        </div>
      </div>

      <Button className='bg-amber-400'>{t('common.open')}</Button>
    </div>
  )
}

export default Rewards
