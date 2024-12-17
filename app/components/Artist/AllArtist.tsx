import { StyleType } from "@/app/types/Style.type"
import Image from "next/image";
import Link from "next/link"

async function AllArtist({ styles, activeTab, currentPage }: { styles: StyleType, activeTab: string, currentPage: number }) {
    // const songs = await fetchSongs(activeTab, currentPage);
    const artist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    return (
        <>
            <div className={styles.tabs}>
                <Link href={`?query=all&page=${currentPage}`} className={`${styles.tab_btn} ${activeTab === 'all' || !activeTab ? styles.active : ''}`}>
                    All Songs
                </Link>
                <Link href={`?query=popular&page=${currentPage}`} className={`${styles.tab_btn} ${activeTab === 'popular' ? styles.active : ''}`}>
                    New Releases
                </Link>
            </div>
            <div className={styles.artists}>
                {artist.map((item, index) => (
                    <div className={styles.artist_item} key={index}>
                        <div>
                            <Link href={'/'} className={styles.artist_img}>
                                <Image src={'/images/song_img.png'} width={160} height={160} style={{ 'borderRadius': '100%' }} alt='' className='img-fluid' />
                            </Link>
                        </div>
                        <div>
                            <p className={styles.artist_name}>
                                <Link href={'/'}>
                                    Ed Sheeran
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllArtist
