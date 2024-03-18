import type { NextPage } from "next";
import styles from "./ytd-compact-video-renderer.module.css";

const YtdCompactVideoRenderer: NextPage = () => {
  return (
    <div className={styles.ytdCompactVideoRenderer}>
      <div className={styles.divdismissible}>
        <div className={styles.athumbnail}>
          <img
            className={styles.hqdefaultjpgIcon}
            loading="lazy"
            alt=""
            src="/hqdefaultjpg@2x.png"
          />
          <div className={styles.ytdThumbnailOverlayTimeSta}>
            <div className={styles.minutes19Seconds}>
              <div className={styles.minutesSeconds}>50:19</div>
            </div>
          </div>
        </div>
        <div className={styles.div}>
          <div className={styles.div1}>
            <div className={styles.a}>
              <div className={styles.figmaDesignToLiveDashboard}>
                <div className={styles.figmaDesignTo}>
                  Figma design to live dashboard with Locofy.ai
                </div>
              </div>
              <div className={styles.div2}>
                <div className={styles.divmetadata}>
                  <div className={styles.divbylineContainer}>
                    <div className={styles.divcontainer}>
                      <div className={styles.ytFormattedString}>
                        <div className={styles.locofy}>Locofy</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>
                      2.5K views • 2 months ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YtdCompactVideoRenderer;
