import { StyleType } from '@/app/types/Style.type';
import Image from 'next/image'
import Link from 'next/link'

function PopularSong({ styles,artistdata }: { styles: StyleType,artistdata:any }) {
    const cdata = [1, 2, 3, 4, 5];
    return (
        <section className={styles.charts}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='main-header'>
                            Popular Songs
                        </h2>
                    </div>
                </div>
                <div className={styles.chart_head}>
                    <div className={`row`}>
                        <div className="col-4">
                            <p className='ps-md-4'>Songs</p>
                        </div>
                        <div className="ps-0 pe-0 col-2 text-center">
                            <p>Artist</p>
                        </div>
                        <div className="ps-0 pe-0 col-2 text-center">
                            <p>Album</p>
                        </div>
                        <div className="ps-0 pe-0 col-2 text-center">
                            <p>Views</p>
                        </div>
                        <div className="ps-0 pe-0 col-2 text-center">
                            <p>Listen</p>
                        </div>
                    </div>
                </div>
                {cdata.map(i => (
                    <div className={styles.chart_content}>
                        <div className="row align-items-center">
                            <div className="col-md-4 col-10 order-1">
                                <div className={styles.chs_name}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <p className={styles.chart_sl}>
                                            1
                                        </p>
                                        <span className={styles.chart_slcircle}>

                                        </span>
                                    </div>
                                    <div className={styles.chart_img}>
                                        <Image src={'/images/chart_img.png'} width={50} height={50} alt='' />
                                    </div>
                                    <div>
                                        <span className={styles.charts_name}>
                                            Perfect
                                        </span>
                                        <Link href='/'>
                                            <Image src={'/images/chart_subtitle.png'} width={25} height={18.75} alt='' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-5 order-3 order-md-2">
                                <p className={styles.ch_artist}>
                                    Ed Sheeran
                                </p>
                            </div>
                            <div className="col-5 col-md-2 order-4">
                                <p className={styles.ch_artist}>
                                    Divide
                                </p>
                            </div>
                            <div className="col-md-2 col-2 order-md-4 order-5">
                                <p className={styles.ch_artist}>
                                    1M
                                </p>
                            </div>
                            <div className="col-2 text-center order-2 order-md-5 ps-0">
                                <Link href='/'>
                                    <Image src={'/images/spotify_logo.png'} width={25} height={25} alt='' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='text-center'>
                    <button className={styles.load_more_btn}>
                        Load more...
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PopularSong;