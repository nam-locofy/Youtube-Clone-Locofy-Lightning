import type { NextPage } from "next";
import Content from "./content";
import styles from "./logic-gate.module.css";

const LogicGate: NextPage = () => {
  return (
    <div className={styles.logicGate}>
      <header className={styles.ironSelector}>
        <button className={styles.ytChipCloudChipRenderer}>
          <div className={styles.ytFormattedString}>
            <div className={styles.all}>All</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer1}>
          <div className={styles.ytFormattedString1}>
            <div className={styles.live}>Live</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer2}>
          <div className={styles.ytFormattedString2}>
            <div className={styles.gaming}>Gaming</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer3}>
          <div className={styles.ytFormattedString3}>
            <div className={styles.laughter}>Laughter</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer4}>
          <div className={styles.ytFormattedString4}>
            <div className={styles.gadgets}>Gadgets</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer5}>
          <div className={styles.ytFormattedString5}>
            <div className={styles.tools}>Tools</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer6}>
          <div className={styles.ytFormattedString6}>
            <div className={styles.quarterbacks}>Quarterbacks</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer7}>
          <div className={styles.ytFormattedString7}>
            <div className={styles.comedy}>Comedy</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer8}>
          <div className={styles.ytFormattedString8}>
            <div className={styles.characters}>Characters</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer9}>
          <div className={styles.ytFormattedString9}>
            <div className={styles.backgroundMusic}>Background music</div>
          </div>
        </button>
        <button className={styles.ytChipCloudChipRenderer10}>
          <div className={styles.ytFormattedString10}>
            <div className={styles.driving}>Driving</div>
          </div>
        </button>
        <div className={styles.ytChipCloudChipRenderer11}>
          <div className={styles.ytFormattedString11}>
            <div className={styles.gameShows}>Game shows</div>
          </div>
        </div>
        <div className={styles.ytChipCloudChipRenderer12}>
          <div className={styles.ytFormattedString12}>
            <div className={styles.history}>History</div>
          </div>
        </div>
      </header>
      <Content />
    </div>
  );
};

export default LogicGate;
