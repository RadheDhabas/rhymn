'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { signOut } from "next-auth/react"
import Account from './Account';

function HeaderMenu({ isMobile, session }: { isMobile: boolean, session: any }) {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    return (
        <>
            <nav className={styles.header}>
                <div className="container">
                    <div className={styles.header_content}>
                        <div className={styles.brand_logo}>
                            <button className={styles.mobile_header_sidemenu_bt} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z">
                                    </path>
                                </svg>
                            </button>
                            <Link href={'/'}>
                                <Image src={'/images/hymn_logo.png'} height={54} width={198} alt='hymn logo' />
                            </Link>
                        </div>
                        <div className={styles.hmenu}>
                            <div className={`${styles.for_pc} ${styles.searchbox}`}>
                                <input type="text" placeholder='What do you want to hymn?' className={styles.search_input} />
                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.7152 19.0481C23.5337 16.7036 24.3908 13.7544 24.112 10.8005C23.8332 7.8465 22.4395 5.10969 20.2145 3.14682C17.9895 1.18395 15.1003 0.142455 12.1346 0.234225C9.16892 0.325996 6.34961 1.54413 4.25021 3.64082C2.14897 5.73896 0.926853 8.55937 0.83289 11.5273C0.738927 14.4952 1.78019 17.3873 3.7445 19.6141C5.7088 21.841 8.44831 23.235 11.4047 23.5122C14.3612 23.7894 17.3121 22.9288 19.656 21.1058L19.7187 21.1714L25.905 27.3592C26.0405 27.4946 26.2013 27.6021 26.3784 27.6755C26.5554 27.7488 26.7452 27.7865 26.9368 27.7865C27.1284 27.7865 27.3181 27.7488 27.4952 27.6755C27.6722 27.6021 27.833 27.4946 27.9685 27.3592C28.104 27.2237 28.2115 27.0628 28.2848 26.8858C28.3582 26.7087 28.3959 26.519 28.3959 26.3274C28.3959 26.1358 28.3582 25.946 28.2848 25.769C28.2115 25.592 28.104 25.4311 27.9685 25.2956L21.7808 19.1094L21.7152 19.0481ZM18.6877 5.70436C19.5111 6.51444 20.1659 7.47952 20.6145 8.54394C21.063 9.60836 21.2963 10.751 21.301 11.9061C21.3057 13.0612 21.0817 14.2057 20.6419 15.2737C20.202 16.3418 19.555 17.3122 18.7383 18.1289C17.9215 18.9457 16.9512 19.5926 15.8831 20.0325C14.8151 20.4723 13.6705 20.6964 12.5155 20.6917C11.3604 20.687 10.2177 20.4536 9.15332 20.0051C8.0889 19.5565 7.12382 18.9017 6.31375 18.0783C4.69488 16.4329 3.79179 14.2144 3.80119 11.9061C3.81058 9.59782 4.73171 7.38676 6.36393 5.75455C7.99614 4.12233 10.2072 3.2012 12.5155 3.1918C14.8238 3.1824 17.0423 4.0855 18.6877 5.70436Z" fill="black" />
                                </svg>
                            </div>
                            <div className={`${styles.for_pc} ${styles.h_items}`}>
                                <Link href={'/all-songs'}>
                                    Songs
                                </Link>
                            </div>
                            <div className={`${styles.for_pc} ${styles.h_items}`}>
                                <Link href={'/'}>
                                    Charts
                                </Link>
                            </div>
                            <div className={`${styles.for_pc} ${styles.h_items}`}>
                                <Link href={'/artists'}>
                                    Artists
                                </Link>
                            </div>

                            <div className={styles.h_items}>
                                {session?.user ? <Account styles={styles}/>:
                                    <Link href={'/sign-in'}>
                                        Sign In
                                    </Link>
                                }
                            </div>
                        </div>
                    </div >
                </div >
            </nav >

            {isMobile && <MobileMenu openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu} styles={styles} />}
        </>

    )
}

export default HeaderMenu
