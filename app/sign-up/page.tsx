import Image from 'next/image'
import styles from './page.module.css'
import SignUp from '../components/SignUp'
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
                    Sign up to Hymnit
                </p>
                <SignUp styles={styles} />
            </div>
        </section>
    )
}

export default Page
