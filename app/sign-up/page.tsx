import Image from 'next/image'
import styles from './page.module.css'
import SignUp from '../components/SignUp'

function Page() {
    return (
        <section className={styles.login_page}>
            <div className={styles.login_model}>
                <div className={styles.hymn_logo}>
                    <Image src={'/images/hymn_white_logo.png'} width={100} height={100} alt='' />
                </div>
                <p className={styles.text}>
                    Login to Hymnit
                </p>
                <SignUp styles= {styles} />
            </div>
        </section>
    )
}

export default Page
