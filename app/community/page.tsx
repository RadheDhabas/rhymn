import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

function page() {
    return (
        <>
            <section className={styles.com_banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6">
                            <h1 className={styles.banner_head}>
                                Welcome to <br />Hymnit
                            </h1>
                            <p className={styles.banner_subt}>
                                Together, we celebrate the stories behind every song and make music more meaningful for everyone.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-2">
                            <div className={styles.com_steps}>
                                <span className={styles.step_num}>
                                    1
                                </span>
                                <p className={styles.step_path}>
                                    Add your favourite lyrics
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className={styles.com_steps}>
                                <span className={styles.step_num}>
                                    2
                                </span>
                                <p className={styles.step_path}>
                                    Explore hidden meanings
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className={styles.com_steps}>
                                <span className={styles.step_num}>
                                    3
                                </span>
                                <p className={styles.step_path}>
                                    Build artist profiles
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className={styles.com_steps}>
                                <span className={styles.step_num}>
                                    4
                                </span>
                                <p className={styles.step_path}>
                                    Engage & contribute
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.explore}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className={styles.explore_h}>
                                    Are you ready to explore?
                                </h2>
                                <p className={styles.explore_t}>
                                    Start contributing now!
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <Link href={''} className={styles.explore_btn}>
                                    Explore Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center mb-md-4">
                        <div className="col-md-6">
                            <div className={styles.comunity_img}>
                                <Image src={'/images/comunity_img.png'} width={500} height={475} alt='' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.path_content}>
                                <span className={styles.step_num}>
                                    1
                                </span>
                                <h2 className={styles.explore_h}>
                                    Add your favourite lyrics
                                </h2>
                                <p className={styles.path_desc}>
                                    Share the songs that mean the most to you by adding your favorite lyrics.
                                    <br /><br />
                                    Whether it's a chart-topper or an obscure tune, let others discover new music through your contributions.
                                </p>
                                <div>
                                    <Link href={''} className={styles.explore_btn}>
                                        Explore Now!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-md-4">
                        <div className="col-md-6 order-md-1 order-2">
                            <div className={styles.path_content}>
                                <span className={styles.step_num}>
                                    2
                                </span>
                                <h2 className={styles.explore_h}>
                                    Explore hidden meanings
                                </h2>
                                <p className={styles.path_desc}>
                                    Look deeper into the lyrics to find what the artist might be talking about or feeling.
                                    <br /><br />
                                    Share your thoughts on what inspired the song, what it could be referring to, or how it connects to emotions and life experiences.
                                    <br /><br />
                                    Discover new interpretations from others, too!
                                </p>
                                <div>
                                    <Link href={''} className={styles.explore_btn}>
                                        Explore Now!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                            <div className={styles.comunity_img}>
                                <Image src={'/images/comunity_img.png'} width={500} height={475} alt='' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-md-4">
                        <div className="col-md-6">
                            <div className={styles.comunity_img}>
                                <Image src={'/images/comunity_img.png'} width={500} height={475} alt='' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.path_content}>
                                <span className={styles.step_num}>
                                    3
                                </span>
                                <h2 className={styles.explore_h}>
                                    Build artist profiles
                                </h2>
                                <p className={styles.path_desc}>
                                    Create fun profiles for your favorite artists! Add details like their background, music journey, and major influences.
                                    <br /><br />
                                    Don't forget to include their songs, albums, and profile photo. Explore everything about the artist in one spot!
                                </p>
                                <div>
                                    <Link href={''} className={styles.explore_btn}>
                                        Explore Now!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-md-4">
                        <div className="col-md-6 order-md-1 order-2">
                            <div className={styles.path_content}>
                                <span className={styles.step_num}>
                                    4
                                </span>
                                <h2 className={styles.explore_h}>
                                    Engage & contribute
                                </h2>
                                <p className={styles.path_desc}>
                                    Join the fun by sharing your thoughts! Leave comments on lyrics, discuss your interpretations, and add your ideas. For example, if you love “Perfect” by Ed Sheeran, share what that song means to you! Your contributions help create a lively community where everyone can connect over music!
                                </p>
                                <div>
                                    <Link href={''} className={styles.explore_btn}>
                                        Explore Now!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                            <div className={styles.comunity_img}>
                                <Image src={'/images/comunity_img.png'} width={500} height={475} alt='' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-md-10">
                            <p className={styles.bottom_desc}>
                                For the people who love music,
                                and for those who make it happen.
                                Join us and be part of our musical home.
                                Welcome to Hymnit!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
