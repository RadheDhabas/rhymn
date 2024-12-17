import { StyleType } from "@/app/types/Style.type";
import Image from "next/image";
import Link from "next/link";
import LyricsComments from "./LyricsComments";

function LyricsDetails({ styles }: { styles: StyleType }) {
    return (
        <>
            <section className={styles.lyric_detail}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-lg-3">
                            <div className={` ${styles.song_img} ${styles.for_pc}`}>
                                <Image
                                    src={'/images/song_img.png'}
                                    width={250}
                                    height={250}
                                    alt='Song Cover'
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="d-flex align-items-center">
                                <Image
                                    src={'/images/song_img.png'}
                                    width={70}
                                    height={70}
                                    alt='Song Cover'
                                    className={`img-fluid me-3 ${styles.for_mobile}`}
                                />
                                <div>
                                    <h1 className='main-header'>
                                        Perfect
                                    </h1>
                                    <Link href={'/'} className={styles.artist_name}>Ed Sheeran</Link>
                                </div>
                            </div>
                            <p className={styles.song_sdesc}>
                                A romantic ballad about traditional marriage, written about Ed Sheeran's wife, Cherry Seaborn. The song includes lyrics such as "I found a love for me" and "Baby, I'm dancing in the dark with you between my arms". <Link href={'/'} className={styles.read_more}>Read More!</Link>
                            </p>
                            <p className={styles.sr_date}>
                                March 3, 2017
                            </p>
                        </div>
                        <div className="col-12">
                            <div className={styles.lyric_box}>
                                <p className={styles.hymn_along}>
                                    HYMN ALONG
                                </p>
                                <div>
                                    I found a love for me<br />
                                    Oh, darlin', just dive right in and follow my lead<br />
                                    Well, I found a girl, beautiful and sweet<br />
                                    Oh, I never knew you were the someone waitin' for me
                                    <br /><br />
                                    'Cause we were just kids when we fell in love<br />
                                    Not knowing what it was<br />
                                    I will not give you up this time<br />
                                    But darling, just kiss me slow<br />
                                    Your heart is all I own<br />
                                    And in your eyes, you're holding mine
                                    <br /><br />
                                    Baby, I'm dancing in the dark<br />
                                    With you between my arms<br />
                                    Barefoot on the grass<br />
                                    Listening to our favourite song<br />
                                    When you said you looked a mess<br />
                                    I whispered underneath my breath<br />
                                    But you heard it<br />
                                    Darling, you look perfect tonight
                                    <br /><br />
                                    Well, I found a woman, stronger than anyone I know<br />
                                    She shares my dreams, I hope that someday I'll share her home<br />
                                    I found a lover, to carry more than just my secrets<br />
                                    To carry love, to carry children of our own
                                    <br /><br />
                                    We are still kids, but we're so in love<br />
                                    Fighting against all odds<br />
                                    I know we'll be alright this time<br />
                                    Darling, just hold my hand<br />
                                    Be my girl, I'll be your man<br />
                                    I see my future in your eyes
                                    <br /><br />
                                    Baby, I'm dancing in the dark<br />
                                    With you between my arms<br />
                                    Barefoot on the grass<br />
                                    Listening to our favorite song<br />
                                    When I saw you in that dress, looking so beautiful<br />
                                    I don't deserve this<br />
                                    Darling, you look perfect tonight
                                    <br /><br />
                                    Baby, I'm dancing in the dark<br />
                                    With you between my arms<br />
                                    Barefoot on the grass<br />
                                    Listening to our favorite song<br />
                                    I have faith in what I see
                                    <br /><br />
                                    Now I know I have met an angel in person<br />
                                    And she looks perfect<br />
                                    I don't deserve this<br />
                                    You look perfect tonight
                                </div>
                                <div className={styles.share_btn}>
                                    <button>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.70234 2.72533V13.1407M13.3783 5.176L9.70234 1.5L6.02633 5.176M1.125 11.3027V17.4293C1.125 18.0793 1.38319 18.7026 1.84278 19.1622C2.30237 19.6218 2.92571 19.88 3.57567 19.88H15.829C16.479 19.88 17.1023 19.6218 17.5619 19.1622C18.0215 18.7026 18.2797 18.0793 18.2797 17.4293V11.3027" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> SHARE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.abt_song}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8">
                            <p className={styles.abt_h}>
                                About
                            </p>
                            <p className={styles.abt_t}>
                                A romantic ballad about traditional marriage, written about Ed Sheeran's wife, Cherry Seaborn. The song includes lyrics such as "I found a love for me" and "Baby, I'm dancing in the dark with you between my arms".
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.album}>
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-5 col-md-7">
                            <h2 className="main-header">
                                Get Answers to FAQs about the song!
                            </h2>
                        </div>

                        <div className="col-lg-5 col-md-5 text-center">
                            <button className={styles.ask_qn_btn}>Ask a question!</button>
                        </div>
                        <div className="col-12">
                            <div className={styles.album_box}>
                                <h2 className="main-header mb-4">
                                    Album
                                </h2>
                                <div className="row align-items-center">
                                    <div className="col-md-4 col-lg-3">
                                        <div className={` ${styles.song_img} ${styles.for_pc}`}>
                                            <Image
                                                src={'/images/song_img.png'}
                                                width={250}
                                                height={250}
                                                alt='Song Cover'
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                        <div className="d-flex align-items-center">
                                            <Image
                                                src={'/images/song_img.png'}
                                                width={70}
                                                height={70}
                                                alt='Song Cover'
                                                className={`img-fluid me-3 ${styles.for_mobile}`}
                                            />
                                            <div>
                                                <h2 className='main-header'>
                                                    Divide
                                                </h2>
                                                <Link href={'/'} className={styles.artist_name}>Ed Sheeran</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className={styles.album_songs}>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                            <div className={styles.albm_sitem}>
                                                1. <Link href={'/'} >Perfect</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.credits}>
                                <h2 className="main-header">
                                    Credits
                                </h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className={styles.cr_cetg}>
                                            Producers
                                        </p>
                                        <p className={styles.cr_names}>
                                            benny blanco,Ed Sheeran & Will Hicks
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className={styles.cr_cetg}>
                                            Vocals
                                        </p>
                                        <p className={styles.cr_names}>
                                            Ed Sheeran
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className={styles.cr_cetg}>
                                            Guitar
                                        </p>
                                        <p className={styles.cr_names}>
                                            benny blanco,Ed Sheeran & Will Hicks
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.youtube_sec}>
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-lg-7">
                                        <iframe loading="lazy" allow="autoplay; encrypted-media" allowFullScreen className="embed-responsive-item" /* frameborder="0" */ height="300px" src="https://www.youtube.com/embed/LibAi1JYuX4" width="100%"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LyricsComments styles={styles} />
        </>
    );
}

export default LyricsDetails; 