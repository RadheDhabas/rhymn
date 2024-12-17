import { StyleType } from '@/app/types/Style.type'
import Link from 'next/link'
import React from 'react'

function Community2({ styles }: { styles: StyleType }) {
    return (
        <div className={styles.comm2}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row align-items-center">
                            <div className="col-md-7 col-12 text-center text-md-start mb-4 mb-md-0">
                                <h2 className='main-header'>
                                    Be a part of the <br /> Hymnit Community
                                </h2>
                            </div>
                            <div className="col-md-5 col-12 text-center">
                                <Link href={'/'} className={styles.learnm_btn} style={{ 'border': '2px solid #000' }}>
                                    Join Now!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community2
