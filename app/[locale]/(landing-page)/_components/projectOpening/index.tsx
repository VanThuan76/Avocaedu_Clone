import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { PreImage } from '../pre-image';

const ProjectOpeningSection = () => {
    const t = useTranslations('LandingPage')

    return (
        <section id="ProjectOpening" className='w-full flex flex-col gap-5 md:gap-10 justify-between items-center mx-auto px-4 md:px-12 py-5 md:py-10 bg-[#faebd7] text-black'>
            <div className='max-w-[1440px] grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                <div className='flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-xl md:text-4xl font-semibold' style={{ lineHeight: "56px" }}>{t('homeProjectOpening.content')}</h1>
                    <Button className="w-full md:w-auto bg-[#58cc05] hover:bg-[#98e95e] rounded-full">{t('common.contactUs')}</Button>
                </div>
                <div className='hidden md:flex relative w-full h-full col-span-1 items-end justify-end self-end'>
                    <div className='w-[80%] overflow-hidden'>
                        <PreImage width={1280} height={300} src='/dataImages/contactUs/backdrop_contactUs.png' alt="Backdrop ContactUs" className='w-full rounded-2xl object-cover object-center' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectOpeningSection;