import { StyleType } from '@/app/types/Style.type';
import Link from 'next/link';

function SignUp({ styles }: { styles: StyleType }) {

    return (
        <div className='text-center'>
            <form className="" >
                <div className={styles.label_input}>
                    <label
                        className=""
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <div className="relative">
                        <input
                            className=""
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>
                <div className={styles.label_input}>
                    <label
                        className=""
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className=""
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                        />
                    </div>

                </div>
                
                <button type='submit' className={styles.login_button}>
                    Sign up
                </button>
                <div
                    className=""
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {/* {errorMessage && (
                            <>
                                <p className="">{errorMessage}</p>
                            </>
                        )} */}
                </div>
                <p className={styles.sign_up_text}>
                    Already have an account? <Link href={'/sign-in'}>Sign in</Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp
