'use client'
import { StyleType } from '@/app/types/Style.type'
import React from 'react'
import MySlider from '../Swiper'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'

function PeopleLike({ styles }: { styles: StyleType }) {
    const popular_art = ["Ed Sheern", "Arijit Singh", "Sonu Nigam", "Shreya Goshal", "Darshan Raval", "Allan Walker", "Udit Narayan", "Lata Mangeshkar"];
    return (
        <section className={styles.popular_artist}>
            <div className="container">
                <div className="row align-items-baseline">
                    <div className="col-9">
                        <h2 className='main-header'>
                            Fans also like...
                        </h2>
                    </div>
                    <div className="col-3 text-end">
                        <Link href={'/artists'} className='show_all_btn'>Show all</Link>
                    </div>
                    <div className="col-12">
                        <div className={styles.slider}>
                            <MySlider slidesPerView={[3, 3, 4, 5, 6]} spaceBetween={[15, 20, 25, 30, 30]}>
                                {popular_art.map((item, index) => (
                                    <SwiperSlide key={index+"artists"}>
                                        <div className={styles.sl_item}>
                                            <Link href={'/'} className={styles.item_img}>
                                                <Image src={'/images/song_img.png'} width={160} height={160} style={{ 'borderRadius': '100%' }} alt='' className='img-fluid' />
                                            </Link>
                                            <p className={styles.pop_artist_name}>
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

export default PeopleLike;
