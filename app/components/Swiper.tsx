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
import { NavigationOptions } from 'swiper/types';
interface MySliderProps {
    children: ReactNode,
    slidesPerView: number[],
    spaceBetween: number[],
}

function MySlider({ children, slidesPerView, spaceBetween }: MySliderProps) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        // This effect runs after the refs are attached to the buttons
    }, []);
    return (<>
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
        <Swiper

            modules={[Navigation, Pagination]}
            
            onBeforeInit={(swiper) => {
                if (swiper.params.navigation) {
                  // Assert that navigation is of type NavigationOptions
                  const navigation = swiper.params.navigation as NavigationOptions;
                  navigation.prevEl = prevRef.current;
                  navigation.nextEl = nextRef.current;
                }
              }}
              onInit={(swiper) => {
                if (swiper.params.navigation) {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
            navigation={{
                prevEl: prevRef?.current, // Assign the prev button ref
                nextEl: nextRef?.current, // Assign the next button ref
            }}
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
        >
            {children}
        </Swiper>

    </>

    );
}

export default MySlider;
