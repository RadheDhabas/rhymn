import { StyleType } from '@/app/types/Style.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function PopularAlbum({ styles, artistdata }: { styles: StyleType,artistdata:any }) {
    const songdata = ['Perfect', "Treat You Better", "Saware", 'Perfect', "Treat You Better", "Saware", 'Perfect', "Saware"]
    return (
        <section className={styles.popular_album}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='main-header'>
                            Popular Songs
                        </h2>
                    </div>
                    <div className="col-12">
                        <div className={styles.popular_album_list}>
                            <div className="row justify-content-center">
                                {
                                    songdata.map(item => (
                                        <div className="col-4 col-md-4 col-lg-3">
                                            <div className={styles.sl_item}>
                                                <Link href={'/'} className={styles.item_img}>
                                                    <Image src={'/images/song_img.png'} width={190} height={190} style={{ 'borderRadius': '7px' }} alt='' className='img-fluid' />
                                                </Link>
                                                <p className={styles.item_name}>
                                                    <Link href={'/'}>
                                                        {item}
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button className={styles.load_more_btn}>
                            Load more...
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularAlbum
