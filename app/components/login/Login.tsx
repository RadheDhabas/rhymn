'use client';
import { authenticate } from '@/app/actions/userAuthAction';
import { StyleType } from '@/app/types/Style.type';
import Link from 'next/link';
import { useActionState, useEffect } from 'react';

function Login({ styles }: { styles: StyleType }) {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );
    return (
        <div className='text-center'>
            <form action={formAction} className="" >
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
                    Log in
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
                    Don't have an account? <Link href={'/sign-up'}>Sign up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
