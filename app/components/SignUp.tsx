'use client'
import { StyleType } from '@/app/types/Style.type';
import Link from 'next/link';
import { useActionState, useEffect, useState } from 'react';
import { signup, verifyWithOtp } from '../actions/userAuthAction';
import { useRouter } from 'next/navigation';

function SignUp({ styles }: { styles: StyleType }) {
    const [errorMessage, formAction, isPending] = useActionState(signup, undefined);
    const [output, otpFormVerify, pending] = useActionState(verifyWithOtp, undefined);
    const [verifyOtp, setVerifyOtp] = useState(1);
    const router = useRouter();
    console.log("output after otp: " + output);
    useEffect(() => {
        if (errorMessage?.step) {
            setVerifyOtp(errorMessage.step);
        }
        if (output) {
            router.replace('/sign-in');
        }
    })
    return (
        <div className='text-center'>
            {verifyOtp == 1 &&
                <form className="" action={formAction}>
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

                    <button type='submit' className={styles.login_button} disabled={isPending}>
                        {isPending ? "Sign up..." : "Sign up"}
                    </button>
                    <div
                        className=""
                        aria-live="polite"
                        aria-atomic="true"
                    >
                    </div>
                    <p className={styles.sign_up_text}>
                        Already have an account? <Link href={'/sign-in'}>Sign in</Link>
                    </p>
                </form>}
            {
                verifyOtp == 2 &&
                <form className="" action={otpFormVerify}>
                    <div className={styles.label_input}>
                        <label
                            className=""
                            htmlFor="email"
                        >
                            Enter Received otp on email.
                        </label>
                        <div className="relative">
                            <input
                                className=""
                                id="otp"
                                type="text"
                                name="otp"
                                placeholder="OTP"
                                required
                            />
                        </div>
                        <input type="hidden" name="email" value={errorMessage?.message} />
                    </div>
                    <button type='submit' className={styles.login_button}>
                        {isPending ? "Verifying..." : "Verify OTP"}
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
            }
        </div>
    )
}

export default SignUp
