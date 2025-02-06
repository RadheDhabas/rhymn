import ArtistDetails from '@/app/components/ArtistDetails/ArtistDetails';
import styles from './page.module.css';
import PopularSong from '@/app/components/ArtistDetails/PopularSong';
import PopularAlbum from '@/app/components/ArtistDetails/PopularAlbum';
import PeopleLike from '@/app/components/ArtistDetails/PeopleLike';
import { getArtistById } from '@/app/actions/artistAction';

async function page({params}:{params:{slug:string}}) {
  const {slug} = await params;
  const artistData = await getArtistById(slug);
  console.log(artistData);
  return (
    <>
      <ArtistDetails styles={styles} artistdata={artistData}/>
      <PopularSong styles={styles} artistdata={artistData}/>
      <PopularAlbum styles={styles} artistdata={artistData}/>
      <PeopleLike styles={styles} />
    </>
  )
}

export default page
