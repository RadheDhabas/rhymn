import LyricsDetails from '@/app/components/LyricsDetails/LyricsDetails';
import styles from './page.module.css';
import { getLyricById } from '@/app/actions/lyricsAction';


async function page({params}:{params:{slug:string}}) {
 const sondData = await getLyricById(params.slug);
  return (
    <>
    <LyricsDetails styles={styles} songdata={sondData}/>
    </>
  )
}

export default page
