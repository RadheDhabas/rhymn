import Image from "next/image";
import styles from "./page.module.css";
import WhatsNew from "./components/homepage/WhatsNew";
import Charts from "./components/homepage/Charts";
import Community from "./components/homepage/Community";
import PopularArtist from "./components/homepage/PopularArtist";
import Discover from "./components/homepage/Discover";
import Community2 from "./components/homepage/Community2";

export default function Home() {
  return (
    <>
   <WhatsNew styles={styles} />
   <Charts styles={styles}/>
   <Community styles={styles} />
   <PopularArtist styles={styles} />
   <Discover styles={styles}/>
   <Community2 styles={styles} />
    </>
  );
}
