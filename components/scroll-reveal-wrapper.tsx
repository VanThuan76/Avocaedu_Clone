import { useAnimation, useInView } from 'framer-motion';
import React, { useRef, useEffect, FC, CSSProperties } from 'react';
interface Props {
    style?: CSSProperties;
    children: React.ReactNode;
    sectionCode?: string;
}

const ScrollRevealWrapper: FC<Props> = ({ children, style, sectionCode }) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);
    return (
        <section
            ref={ref}
            className='relative mx-auto w-full h-full'
            style={style}
            id={`sectionParent:${sectionCode}`}
        >
            {children}
        </section>
    );
};

export default ScrollRevealWrapper;
