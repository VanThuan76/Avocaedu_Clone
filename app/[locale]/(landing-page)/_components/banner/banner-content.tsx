import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

export const wordAnimation = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        },
    },
};
interface Props {
    data: { title: string, description: string, slogan: string, placeholderSearch: string, image: string };
    text: string;
    handleClick?: any;
}
const BannerContent = ({ data, text, handleClick }: Props) => {
    const src = data.image;
    return (
        <div
            style={{ backgroundImage: `url('/dataImages/home/background_home.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
            className={`w-full min-h-screen grid grid-cols-2 justify-between items-center leading-[90%] tracking-wide mx-auto px-8 md:px-36 gap-0 md:gap-5 text-black`}
        >
            <div className='flex flex-col justify-start gap-3 items-start col-span-2 lg:col-span-1'>
                <motion.div className='text-base md:text-lg font-base'>
                    {data.slogan}
                </motion.div>
                <div className='text-left text-2xl font-bold capitalize md:text-4xl'>
                    <AnimatePresence mode='wait'>
                        <motion.span
                            variants={staggerChildren}
                            animate='animate'
                            className='leading-7 md:leading-10'
                        >
                            {data.title}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <motion.div className='text-lg md:text-xl'>
                    {data.description}
                </motion.div>
                {text && (
                    <div className='mb-4 w-[80%] flex justify-end bg-white border border-bg-[#58cc05] rounded-full overflow-hidden'>
                        <div className='relative w-full p-4 text-sm'>
                            {data.placeholderSearch}
                            <motion.button
                                whileHover='hover'
                                className={`bg-[#58cc05] absolute top-0 right-0 flex justify-between items-center gap-3 text-white text-left cursor-pointer h-full px-2 md:px-4`}
                                onClick={handleClick}
                            >
                                <p className='text-base'>{text}</p>
                            </motion.button>
                        </div>
                    </div>
                )}
            </div>
            <div className='hidden lg:block col-span-1'>
                <motion.div
                    className='relative w-full h-full mx-auto'
                    variants={wordAnimation}
                    initial='initial'
                    animate='animate'
                >
                    <Image src={src} alt={data.title} width={300} height={200} className="w-full h-full bg-cover bg-center bg-no-repeat" />
                </motion.div>
            </div>
        </div>
    );
};

export default BannerContent;

