import { StyleType } from '@/app/types/Style.type'
import Image from 'next/image'
import Link from 'next/link'

function AlbumDetails({ styles }: { styles: StyleType }) {
    return (
        <section className={styles.artist_details}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <div className={` ${styles.artist_img} ${styles.for_pc}`}>
                            <Image
                                src={'/images/song_img.png'}
                                width={240}
                                height={240}
                                alt='Song Cover'
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9 m-auto">
                        <div className="d-flex align-items-center ms-md-4">
                            <Image
                                src={'/images/song_img.png'}
                                width={70}
                                height={70}
                                alt='Song Cover'
                                style={{ "borderRadius": "7px" }}
                                className={`img-fluid me-3 ${styles.for_mobile}`}
                            />
                            <div>
                                <h1 className={styles.artist_name}>
                                    Divide
                                </h1>
                                <p className={styles.artist_uname}>
                                    <span>Album</span> <span className={styles.rdate}>March 3, 2017</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-end">
                        <div className={styles.share_btn}>
                            <button>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70234 2.72533V13.1407M13.3783 5.176L9.70234 1.5L6.02633 5.176M1.125 11.3027V17.4293C1.125 18.0793 1.38319 18.7026 1.84278 19.1622C2.30237 19.6218 2.92571 19.88 3.57567 19.88H15.829C16.479 19.88 17.1023 19.6218 17.5619 19.1622C18.0215 18.7026 18.2797 18.0793 18.2797 17.4293V11.3027" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> SHARE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={styles.abt_artist}>
                            <h2 className="main-header">
                                About
                            </h2>
                            <p className={styles.abt_text}>
                                Ed Sheeran is a singer/songwriter who was born in Halifax, England but was raised in Suffolk, England. He's known for his energetic live shows, which involve him using a loop pedal and sometimes throwing some raps in for good measure.
                            </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className={styles.album_box}>
                            <h2 className="main-header">
                                Album
                            </h2>
                            <div className={styles.album_songs}>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.albm_sitem}>
                                    <div className='text-center d-flex flex-column justify-content-around'>
                                        <span >
                                            1
                                        </span>
                                        <span className={styles.a_slcircle}></span>
                                    </div>
                                    <div>
                                        <span className={styles.palb_name}>
                                            <Link href={'/'} >Perfect</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AlbumDetails
