import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

function FooterMenu() {
    return (
        <section className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 m-auto col-md-6">
                        <div className='d-flex align-items-center'>
                            <Image src={'/images/hymn_white_logo.png'} width={100} height={100} alt='' className={`img-fluid ${styles.footer_logo}`} />
                            <span className={styles.logo_aname}>
                                Just Hymn It.
                            </span>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ul className={styles.footer_links}>
                            <li>
                                <Link href={'/'}>
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    Contributor Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className={styles.footer_smedia}>
                            <Link href={'/'}>
                                <Image src={'/images/hymn_ig.png'} width={36} height={36} alt='' className={`img-fluid ${styles.footer_sm}`} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/hymn_yt.png'} width={46} height={36} alt='' className={`img-fluid ${styles.footer_sm}`} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/hymn_x.png'} width={35} height={36} alt='' className={`img-fluid ${styles.footer_sm}`} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={'/images/hymn_in.png'} width={39.8} height={36} alt='' className={`img-fluid ${styles.footer_sm}`} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterMenu
