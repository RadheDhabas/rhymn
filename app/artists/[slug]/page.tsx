import ArtistDetails from '@/app/components/ArtistDetails/ArtistDetails';
import styles from './page.module.css';
import PopularSong from '@/app/components/ArtistDetails/PopularSong';
import PopularAlbum from '@/app/components/ArtistDetails/PopularAlbum';
import PeopleLike from '@/app/components/ArtistDetails/PeopleLike';

function page() {
  return (
    <>
      <ArtistDetails styles={styles} />
      <PopularSong styles={styles} />
      <PopularAlbum styles={styles} />
      <PeopleLike styles={styles} />
    </>
  )
}

export default page
