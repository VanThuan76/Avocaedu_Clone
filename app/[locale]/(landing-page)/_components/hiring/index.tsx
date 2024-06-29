import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PreImage } from '../pre-image';

const HiringSection = () => {
    const t = useTranslations('LandingPage')

    return (
        <section id="Hiring" className='w-full flex flex-col gap-5 md:gap-10 justify-between items-center mx-auto px-4 md:px-12 py-5 md:py-20 bg-[#faebd7] text-black'>
            <div className='max-w-[1440px] grid grid-cols-1 md:grid-cols-3 justify-between items-center'>
                <div className='hidden md:flex relative w-full h-full col-span-1 items-start justify-start self-start'>
                    <div className='w-full overflow-hidden'>
                        <PreImage width={1280} height={200} src='/dataImages/hiring/backdrop_instructor.png' alt="Backdrop Instructor" className='w-full rounded-2xl object-contain object-center' />
                    </div>
                </div>
                <div className='col-span-2 flex flex-col justify-start items-start gap-5 ml-10 md:ml-20'>
                    <h1 className='text-xl md:text-4xl font-semibold' style={{ lineHeight: "56px" }}>{t('homeHiring.title')}</h1>
                    <p>{t('homeHiring.description')}</p>
                    <div className='flex justify-start items-center gap-5'>
                        <Button className="bg-[#58cc05] hover:bg-[#98e95e] rounded-full">{t('homeHiring.content_btn_1')}</Button>
                        <Button className="bg-[#58cc05] hover:bg-[#98e95e] rounded-full">{t('homeHiring.content_btn_2')}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HiringSection;