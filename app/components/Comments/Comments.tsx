import styles from './comment.module.css'

function Comments() {
  return (
    <section className={styles.comment_section}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="main-header mb-4">
                        Comments
                    </h2>
                </div>
                <div className="col-10">
                    <div className={styles.cmt_box}>
                        <textarea name="" id="" placeholder="Write youe comment..."></textarea>
                    </div>
                </div>
                <div className="col-2">
                    <button className={styles.cmt_btn}>
                        +
                    </button>
                </div>
                <div className="col-12 col-md-10">
                    <div className={styles.old_cmt}>
                        <div className="row align-items-center">
                            <div className="col-8 pe-0">
                                <p className={styles.commentoter_name}>
                                    Radhe Dhabas
                                </p>
                            </div>
                            <div className="col-4 ps-0">
                                <p className={styles.cmmt_date}>
                                    04 Nov 2024
                                </p>
                            </div>
                            <div className="col-12">
                                <p className={styles.cmt_text}>
                                    Gibbs has been fairly quiet lately, but he hasn’t been completely absent from the scene. Back in February completely absent from the scene. Back in February
                                </p>
                                <p className={styles.cmt_likes}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.62 21.36"><path d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path></svg>
                                    <span>
                                        5
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Comments
