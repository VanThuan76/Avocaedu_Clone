import { MousePointer2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { ICourse } from '@/@types/avocaedu-type';

import CardCourse from '../course/card-course';
import TitleSection from "../title-section";

interface Fat1000SectionProps {
    courses: ICourse[] | undefined | null
}
const Fat1000Section = ({ courses }: Fat1000SectionProps) => {
    const t = useTranslations('LandingPage');

    return (
        <section id="Fat1000" className='max-w-[1440px] mx-auto px-4 md:px-12 my-4 md:my-16'>
            <div className='w-full flex flex-col gap-2 justify-start items-start'>
                <TitleSection title={t('homeFat1000.title')} className="justify-start items-start" />
                <div className='mt-5 flex justify-start items-start gap-2'>
                    <MousePointer2 className='rotate-90 w-[32px] h-[32px]' fill='#000' />
                    <p>{t('homeFat1000.description')}</p>
                </div>
                <div className='mt-5 w-full flex flex-wrap justify-start items-start gap-5'>
                    {!courses || courses.length === 0 ?
                            <p className='mt-10'>{t('common.notFound')}</p>
                        : courses.map((course, index) => (
                            <CardCourse key={index} item={course} type="fat" />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Fat1000Section;