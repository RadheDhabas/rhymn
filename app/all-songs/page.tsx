import styles from './page.module.css';
import AllSongs from '../components/AllSongs/AllSongs';
import LoadmoreBtn from '../components/AllSongs/LoadmoreBtn';
import { getAllSongs } from '../actions/lyricsAction';
async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const activeTab = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const songs = await getAllSongs(currentPage, activeTab);
  return (
    <>
      <section className={styles.all_song}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.header}>
                Songs
              </h1>
              <AllSongs styles= {styles} activeTab={activeTab} currentPage={currentPage} songs={songs} />
              <LoadmoreBtn styles={styles} label="Load more..." currentPage={currentPage} activeTab={activeTab}/>
            </div>
            {JSON.stringify(songs)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
