import { StyleType } from "@/app/types/Style.type"
import Image from "next/image";
import Link from "next/link"

async function AllSongs({ styles, activeTab, currentPage, songs }: { styles: StyleType, activeTab: string, currentPage: number, songs: any }) {
    // const songs = await fetchSongs(activeTab, currentPage);
    const songData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    console.log(songs)
    return (
        <>
            <div className={styles.tabs}>
                <Link href={`?query=all&page=${currentPage}`} className={`${styles.tab_btn} ${activeTab === 'all' || !activeTab ? styles.active : ''}`}>
                All Songs
                </Link>
                <Link href={`?query=new&page=${currentPage}`} className={`${styles.tab_btn} ${activeTab === 'new' ? styles.active : ''}`}>
                New Releases
                </Link>
            </div>
            <div className={styles.songs}>
                {songs && songs.map((item:any, index:any) => (
                    <div className={styles.song_item} key={index}>
                        <div>
                            <Link href={`/lyrics/${item.id}`} className={styles.song_img}>
                                <Image src={'/images/song_img.png'} width={160} height={160} style={{ 'borderRadius': '7px' }} alt='' className='img-fluid' />
                            </Link>
                        </div>
                        <div>
                            <p className={styles.song_name}>
                                <Link href={'/'}>
                                    {item?.title}
                                </Link>
                            </p>
                            <Link href={'/'} className={styles.artist_name}>
                            Arijit Singh
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllSongs
