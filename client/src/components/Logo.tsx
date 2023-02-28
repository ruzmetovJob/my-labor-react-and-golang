import React from 'react';
import { LazyMotion, domAnimation,AnimatePresence, motion as m } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 0.5, bounce: 0.5 },
                opacity: { delay, duration: 0.5 }
            }
        };
    }
};

export default function Logo() {
    return (
        <LazyMotion features={domAnimation}>
            <m.svg initial="hidden" animate="visible" className="h-[40px]" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <m.path variants={draw} custom={2} d="M39.2872 1.78512L49.0641 32.2267C49.5971 33.8865 48.3591 35.5844 46.6158 35.5844H39.4265C38.3061 35.5844 37.3147 34.859 36.9757 33.7912L27.3099 3.34962C26.7834 1.69149 28.021 0 29.7607 0H36.8389C37.9561 0 38.9456 0.721408 39.2872 1.78512Z" fill="#2C9AFF" />
                <m.path variants={draw} custom={1.5} d="M29.9232 24.3L23.0291 2.21734C22.6173 0.898258 21.3959 0 20.014 0C18.332 0 16.945 1.31809 16.8594 2.99791L16.0184 19.5038C15.9885 20.09 16.0593 20.6771 16.2275 21.2394L19.9699 33.7499C20.2956 34.8386 21.2972 35.5844 22.4335 35.5844H25.9123C27.0315 35.5844 28.0222 34.8605 28.3623 33.7941L29.9092 28.9423C30.3904 27.433 30.3953 25.8122 29.9232 24.3Z" fill="#CFD0D0" />
                <m.path variants={draw} custom={1} d="M13.0604 0H20.1412C21.8752 0 23.1121 1.681 22.5963 3.3364L13.0299 34.0377C12.6951 35.1122 11.7004 35.8442 10.5749 35.8442H3.49411C1.76021 35.8442 0.52329 34.1632 1.0391 32.5077L10.6054 1.80646C10.9403 0.731932 11.935 0 13.0604 0Z" fill="#2C9AFF" />
            </m.svg>
        </LazyMotion>
    )
}
