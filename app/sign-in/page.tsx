import Image from 'next/image'
import styles from './page.module.css'
import Login from '../components/login/Login'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';


async function Page() {
    const session = await auth();
    if (session?.user) {
        await redirect('/')
    }
    return (
        <section className={styles.login_page}>
            <div className={styles.login_model}>
                <div className={styles.hymn_logo}>
                    <Image src={'/images/hymn_white_logo.png'} width={100} height={100} alt='' />
                </div>
                <p className={styles.text}>
                    Login to Hymnit
                </p>
                <div className='text-center'>
                    <button className={styles.google_login_btn}>
                        <Image src={'/images/google_icon.png'} width={24} height={24} alt='' />
                        Continue with Google
                    </button>
                </div>
                <p className={styles.text2}>
                    Or
                </p>
                <Login styles={styles} />
            </div>
        </section>
    )
}

export default Page
