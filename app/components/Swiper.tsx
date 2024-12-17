'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles

import 'swiper/css';
import { ReactNode, useEffect, useRef } from 'react';
import React from 'react';

interface MySliderProps {
    children: ReactNode,
    slidesPerView: number[],
    spaceBetween: number[],
}

function MySlider({ children, slidesPerView, spaceBetween }: MySliderProps) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (<>
        <Swiper
            spaceBetween={spaceBetween[0]}
            slidesPerView={slidesPerView[0]}
            breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: slidesPerView[1],
                  spaceBetween: spaceBetween[1],
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: slidesPerView[2],
                  spaceBetween: spaceBetween[2],
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: slidesPerView[3],
                  spaceBetween: spaceBetween[3],
                },
              }}
            modules={[Navigation, Pagination]}
            navigation={{
                prevEl: prevRef?.current, // Assign the prev button ref
                nextEl: nextRef?.current, // Assign the next button ref
            }}
            onInit={swiper => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.prevEl = prevRef.current
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.update()
              }}
        >
            {children}
        </Swiper>
        <button ref={prevRef} className='custom-prev'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.6666 11L12.6666 16L17.6666 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        <button ref={nextRef} className='custom-next'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3334 21L19.3334 16L14.3334 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </>

    );
}

export default MySlider;
