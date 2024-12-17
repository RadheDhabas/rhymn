import LyricsDetails from '@/app/components/LyricsDetails/LyricsDetails';
import styles from './page.module.css';

function page({params}:{params:{slug:string}}) {
  return (
    <>
    <LyricsDetails styles={styles} />
    </>
  )
}

export default page
