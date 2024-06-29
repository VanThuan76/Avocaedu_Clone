'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { PreImage } from '../pre-image';
import TitleSection from '../title-section';

const PartnersSection = () => {
    const t = useTranslations('LandingPage')

    const data = [
        {
            imageUrl: '/dataImages/partner/alvin_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/donaso_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/emai_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/evvolabs_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/jupviecvn_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/rainscale_partner.png',
            linkUrl: '/'
        },
        {
            imageUrl: '/dataImages/partner/tekup_partner.png',
            linkUrl: '/'
        }
    ]
    return (
        <section className='max-w-[1440px] mx-auto px-4 md:px-12 -mt-16'>
            <div className='w-full flex flex-col justify-around items-center text-center'>
                <TitleSection title={t('homePartners.title')} />
                <div className='mt-10 hidden w-full items-start justify-between md:flex px-12'>
                    <Swiper
                        className='mySwiper w-[1980px]'
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={5}
                        spaceBetween={20}
                        centeredSlides={true}
                        navigation={false}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop
                    >
                        {data.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='relative cursor-pointer'>
                                    <PreImage width={100} height={100} src={item.imageUrl as string} alt={item.imageUrl} className='object-contain' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
