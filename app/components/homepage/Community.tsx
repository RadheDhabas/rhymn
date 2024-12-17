import { StyleType } from '@/app/types/Style.type'
import Image from 'next/image'
import Link from 'next/link'

function Community({ styles }: { styles: StyleType }) {
    return (
        <section className={styles.community}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-4">
                        <div className={styles.comunity_img}>
                            <Image src={'/images/comunity_img.png'} width={399} height={379} alt='' className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7">
                        <h2 className={styles.community_header}>
                            Make sure you're a part of the Hymnit Community
                        </h2>
                        <p className={styles.comm_text}>
                            Together, we celebrate the stories behind every song and make music more meaningful for everyone.
                        </p>
                        <div className='text-center text-md-start'>
                            <Link href={'/'} className={styles.join_btn}>
                                Join Now!
                            </Link>
                            <Link href={'/'} className={styles.learnm_btn}>
                                Learn More!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community
