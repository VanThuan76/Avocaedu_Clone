'use client'
import { useTranslations } from 'next-intl'
import BannerContent from './banner-content'

const BannerSection = () => {
  const t = useTranslations('LandingPage')

  function onSearch() {

  }

  return (
    <section className='w-full snap-x-mandatory bottom-24 scrollbar-none relative flex overflow-hidden'>
      <div className='w-full flex justify-between items-center mx-auto'>
        <BannerContent data={{ title: t("homeBanner.title"), description: t("homeBanner.description"), placeholderSearch: t("homeBanner.placeholderSearch"), slogan: t("homeBanner.slogan"), image: "/dataImages/home/backdrop_home.png" }} text={t("common.search")} handleClick={onSearch} />
      </div>
    </section>
  )
}

export default BannerSection
