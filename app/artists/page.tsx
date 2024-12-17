import styles from './page.module.css';
import LoadmoreBtn from '../components/AllSongs/LoadmoreBtn';
import AllArtist from '../components/Artist/AllArtist';
async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const activeTab = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section className={styles.all_artist}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={styles.header}>
              Artists
              </h1>
              <AllArtist styles= {styles} activeTab={activeTab} currentPage={currentPage} />
              <LoadmoreBtn styles={styles} label="Load more..." currentPage={currentPage} activeTab={activeTab}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
