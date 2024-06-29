"use client"

import Footer from './_components/footer'
import Navbar from './_components/navbar'
import BannerSection from './_components/banner'
import PartnersSection from './_components/partners'
import Fat1000Section from './_components/fat1000'
import AiAppstoreSection from './_components/aiAppstore'
import ProjectOpeningSection from './_components/projectOpening'
import InstructorsSection from './_components/instructors'

import useFetchData from '@/shared/hooks/useFetchData'

import { IResult } from '@/@types/avocaedu-type'
import { URL_API } from '@/shared/constants'
import { categoryAvocaedu } from '@/shared/constants/category-avocaedu'
import HiringSection from './_components/hiring'

const LandingPage = () => {
  const { data } = useFetchData<IResult[]>(URL_API.CATEGORY_COURSE);

  return (
    <div className='min-h-screen max-w-screen mx-auto'>
      <Navbar />
      <BannerSection />
      <PartnersSection />
      <Fat1000Section courses={data && data.find(item => item.name === categoryAvocaedu.fat1000)?.course} />
      <AiAppstoreSection courses={data && data.find(item => item.name === categoryAvocaedu.aiAppstore)?.course} />
      <ProjectOpeningSection />
      <InstructorsSection />
      <HiringSection />
      <Footer />
    </div>
  )
}

export default LandingPage
