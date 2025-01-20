'use client';
import { createLyric } from "@/app/actions/lyricsAction";
import { StyleType } from "@/app/types/Style.type"
import { useActionState } from "react";

function AddLyrics({ styles }: { styles: StyleType }) {
    const [state, formAction, errorMessage] = useActionState(createLyric,null);
    return (
        <section className={styles.add_lyrics}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6">
                        <h1 className={styles.banner_head}>
                            First, you <br /> write
                        </h1>
                        <p className={styles.banner_subt}>
                            This is your time to shine. Show us who you are and how passionate you are about music.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className={styles.content}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <p className={styles.lyrcH}>
                                        Add a song
                                    </p>
                                    <form action={formAction}>
                                        <p className={styles.lyricsSs}>
                                            Primary Info
                                        </p>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="artist_name">By</label>
                                            </div>
                                            <input type="text" id="artist_name" name="artists" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="song_title">Song Title</label>
                                            </div>
                                            <input type="text" id="song_title" name="title" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="">Primary  Tag</label>
                                            </div>
                                            <div className={styles.checkboxes}>
                                                <input
                                                    type="checkbox"
                                                    id="pop"
                                                    name="categories"
                                                    value="Pop"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="pop" className={styles.check_label}>Pop</label>
                                                <input
                                                    type="checkbox"
                                                    id="rap"
                                                    name="categories"
                                                    value="Rap"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="rap" className={styles.check_label}>Rap</label>
                                                <input
                                                    type="checkbox"
                                                    id="rb"
                                                    name="categories"
                                                    value="R&B"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="rb" className={styles.check_label}>R&B</label>
                                                <input
                                                    type="checkbox"
                                                    id="rock"
                                                    name="categories"
                                                    value="Rock"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="rock" className={styles.check_label}>Rock</label>
                                                <input
                                                    type="checkbox"
                                                    id="country"
                                                    name="categories"
                                                    value="Country"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="country" className={styles.check_label}>Country</label>
                                                <input
                                                    type="checkbox"
                                                    id="nonmmusic"
                                                    name="categories"
                                                    value="Non-music"
                                                    className={styles.checks}
                                                />
                                                <label htmlFor="nonmmusic" className={styles.check_label}>Non-music</label>
                                            </div>
                                            <p className={styles.dcbox}>
                                                Note - If you're unsure about a tag, choose “Pop.” You can add more tags later.
                                            </p>
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="lyrics">Add Lyrics</label>
                                            </div>
                                            <textarea id="lyrics" rows={10} name="lyrics" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <p className={styles.lyricsSs}>
                                            Additional Info
                                        </p>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="featuring">Featuring</label>
                                            </div>
                                            <input type="text" id="featuring" name="featuring" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="produced_by">Produced By</label>
                                            </div>
                                            <input type="text" id="produced_by" name="producedBy" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="written_by">Written By</label>
                                            </div>
                                            <input type="text" id="written_by" name="writtenBy" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <p className={styles.lyricsSs}>
                                            Release Date & Album
                                        </p>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="release_date">Release Date</label>
                                            </div>
                                            <input type="date" id="release_date" name="releaseDate" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="album">Album</label>
                                            </div>
                                            <input type="text" id="album" name="album" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <p className={styles.lyricsSs}>
                                            Audio & Video
                                        </p>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="cloud_url">SoundCloud URL</label>
                                            </div>
                                            <input type="text" id="cloud_url" name="cloudUrl" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <div className={styles.label}>
                                                <label htmlFor="youtube_url">YouTube URL</label>
                                            </div>
                                            <input type="text" id="youtube_url" name="youtubeUrl" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <p className={styles.lyricsSs}>
                                            Tags
                                        </p>
                                        <div>
                                            <input type="text" id="tags" name="tags" className={`form-control ${styles.inputs}`} />
                                        </div>
                                        <div>
                                            <button className={`${styles.submit_btn}`}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
                                        )
}

export default AddLyrics
