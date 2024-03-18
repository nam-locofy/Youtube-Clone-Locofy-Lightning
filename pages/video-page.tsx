import type { NextPage } from "next";
import YtdMasthead1 from "../components/ytd-masthead1";
import Main from "../components/main";
import RightPanel from "../components/right-panel";
import styles from "./video-page.module.css";

const VideoPage: NextPage = () => {
  return (
    <div className={styles.videoPage}>
      <YtdMasthead1 />
      <div className={styles.div} />
      <div className={styles.divcontents} />
      <main className={styles.returnStatement}>
        <section className={styles.variableAssignment}>
          <Main
            videoSrc="https://www.youtube.com/embed/oLDUkXF82fQ?rel=0"
            videoTitle="Figma Design to Live Website with Locofy.ai"
            channelLogo="/ytimgshadow@2x.png"
            channelName="Locofy"
            subsCount="1.22K subscribers"
            viewsAndTime="6.3K views 3 months ago"
          />
          <RightPanel />
        </section>
      </main>
    </div>
  );
};

export default VideoPage;
