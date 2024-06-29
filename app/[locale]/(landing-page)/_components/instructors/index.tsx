import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import TitleSection from '../title-section';
import CardInstructor, { ICardInstructorData } from './card-instructor';

const InstructorsSection = () => {
    const t = useTranslations('LandingPage');
    const data: ICardInstructorData[] = [
        {
            image: '/dataImages/instructor/instructor_1.png',
            name: t('homeInstructors.data.data_1.name'),
            position: t('homeInstructors.data.data_1.position'),
        },
        {
            image: '/dataImages/instructor/instructor_2.png',
            name: t('homeInstructors.data.data_2.name'),
            position: t('homeInstructors.data.data_2.position'),
        },
        {
            image: "/dataImages/instructor/instructor_3.png",
            name: t('homeInstructors.data.data_3.name'),
            position: t('homeInstructors.data.data_3.position'),
        },
        {
            image: "/dataImages/instructor/instructor_4.png",
            name: t('homeInstructors.data.data_4.name'),
            position: t('homeInstructors.data.data_4.position'),
        },
        {
            image: "/dataImages/instructor/instructor_5.png",
            name: t('homeInstructors.data.data_5.name'),
            position: t('homeInstructors.data.data_5.position'),
        },
    ];
    return (
        <section id="Instructors" className='max-w-[1440px] mx-auto px-4 md:px-12 py-5 md:py-10'>
            <div className='w-full flex flex-col justify-around items-center text-center'>
                <TitleSection title={t('homeInstructors.title')} />
                <div className='mt-10 hidden w-full items-start justify-between md:flex px-12'>
                    <Swiper
                        className='mySwiper w-[1980px]'
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={3}
                        spaceBetween={200}
                        centeredSlides={true}
                        navigation={false}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop
                    >
                        {data.map((item: ICardInstructorData, idx: number) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <CardInstructor image={item.image} name={item.name} position={item.position} />
                                </SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
