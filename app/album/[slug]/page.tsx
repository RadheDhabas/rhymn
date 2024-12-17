import AlbumDetails from '@/app/components/AlbumDetail/AlbumDetails';
import styles from './page.module.css';
import PopularAlbum from '@/app/components/AlbumDetail/PopularAlbum';
import Comments from '@/app/components/Comments/Comments';

function page() {
  return (
    <>
    <AlbumDetails styles={styles} />
    <PopularAlbum styles={styles} />
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className={styles.c_border}></div>
            </div>
        </div>
    </div>
    <Comments />
    </>
  )
}

export default page
