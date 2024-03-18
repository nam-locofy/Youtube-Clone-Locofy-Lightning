import type { NextPage } from "next";
import YtdMasthead from "../components/ytd-masthead";
import FrameComponent from "../components/frame-component";
import LogicGate from "../components/logic-gate";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <YtdMasthead />
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <FrameComponent />
          <LogicGate />
        </section>
        <button className={styles.ytdGuideEntryRenderer}>
          <img className={styles.svgIcon} alt="" src="/svg-18.svg" />
          <div className={styles.assignmentOperator}>
            <div className={styles.browseChannels}>Browse channels</div>
          </div>
        </button>
      </main>
    </div>
  );
};

export default Homepage;
