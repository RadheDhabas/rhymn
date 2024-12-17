'use client';
import { StyleType } from '@/app/types/Style.type'
import Link from 'next/link'
import React from 'react'
import MySlider from '../Swiper'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

function Discover({ styles }: { styles: StyleType }) {
    const songdata = ['Perfect', "Treat You Better", "Saware", 'Perfect', "Treat You Better", "Saware", 'Perfect', "Treat You Better", "Saware"]
    return (
        <section className={styles.what_new}>
            <div className="container">
                <div className="row align-items-baseline">
                    <div className="col-9">
                        <h2 className='main-header'>
                            Discover
                        </h2>
                    </div>
                    <div className="col-3 text-end">
                        <Link href={'/'} className='show_all_btn'>Show all</Link>
                    </div>
                    <div className="col-12">
                        <div className={styles.slider}>
                            <MySlider slidesPerView={[3, 3, 4, 5, 6]} spaceBetween={[15, 20, 25, 30, 30]}>
                                {songdata.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.sl_item}>
                                            <Link href={'/'} className={styles.item_img}>
                                                <Image src={'/images/song_img.png'} width={160} height={160} style={{ 'borderRadius': '7px' }} alt='' className='img-fluid' />
                                            </Link>
                                            <p className={styles.item_name}>
                                                <Link href={'/'}>
                                                    {item}
                                                </Link>
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </MySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover
