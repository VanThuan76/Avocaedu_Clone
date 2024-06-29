import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const t = useTranslations('LandingPage')
  return (
    <div
      style={{ backgroundImage: `url('/dataImages/home/background_home.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
      className='w-full flex flex-col gap-10 justify-between items-center mx-auto px-4 md:px-12 lg:px-24 py-10'
    >
      <div className='max-w-[1440px] grid grid-cols-1 md:grid-cols-5 gap-10 justify-start items-start'>
        <div className='col-span-2 flex flex-col justify-center items-start gap-1 pr-5'>
          <div className='relative'>
            <Image height={100} width={100} alt='Logo' src='/logo.png' className='w-full h-full object-contain' />
          </div>
          <div>
            <p className='mt-2 font-medium'>{t("footer.title")}</p>
          </div>
        </div>
        <div className='flex flex-col justify-end items-start gap-2 col-span-1'>
          <Link className='font-medium' href='/'>{t("footer.aboutUs")}</Link>
          <Link className='font-medium' href='/'>{t("footer.contactUs")}</Link>
        </div>
        <div className='flex flex-col justify-end items-start gap-2 col-span-1'>
          <Link className='font-medium' href='/'>{t("footer.course")}</Link>
          <Link className='font-medium' href='/'>{t("footer.aiAppstore")}</Link>
          <Link className='font-medium' href='/'>{t("footer.fat1000")}</Link>
          <Link className='font-medium' href='/'>{t("footer.tests")}</Link>
        </div>
        <div className='flex flex-col justify-end items-start gap-2 col-span-1'>
          <Link className='font-medium' href='/'>{t("footer.projectOpening")}</Link>
          <Link className='font-medium' href='/'>{t("footer.hiring")}</Link>
          <Link className='font-medium' href='/'>{t("footer.becomeInstructor")}</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
