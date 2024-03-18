import type { NextPage } from "next";
import styles from "./ytd-compact-video-renderer1.module.css";

export type RelatedVideoType = {
  thumbnail?: string;
  videoTitle?: string;
  channelName?: string;
  viewsAndTime?: string;
  videoLength?: string;
};

const RelatedVideo: NextPage<RelatedVideoType> = ({
  thumbnail = "https://d1xzdqg8s8ggsr.cloudfront.net/65f7aea0addea93a2df73f84/edda295f-d966-494f-abbf-f9d102b25090_1710731040599612718?Expires=-62135596800&Signature=DziTu0l7N6RZGgvydBbm6d33~2tev5pz3YL~hpH3PVcdE4FcSv8qfm3xlJ3czS6SF-TFrhsb~--~eEQMwB3Kdk0s3fIlELBs2ZhAoaxa7set12ju6EtgacexjZfdeL6dW6JfpVUL-ipfs0dhKusbnCsAXYFZIHZI4UaBFWF-Gczn7cNBeb-~H4RfGBqIzyW4E0jmtQIAMhZY7ja7XbORUPCRjWv~S8AHPSHjh8ekc54JBlkAnZ3QUS7VhSOgprA~tyljNuATZw8~bfflxnD7CQJYSQQh84vdDDOjym83s65HCeL2j4WHMdnDFtYIT8gwmsw-FVS26vuXBsWeTL-10Q__&Key-Pair-Id=K1P54FZWCHCL6J",
  videoTitle,
  channelName,
  viewsAndTime,
  videoLength,
}) => {
  return (
    <div className={styles.ytdCompactVideoRenderer}>
      <div className={styles.divdismissible}>
        <button className={styles.athumbnail}>
          <img className={styles.hqdefaultjpgIcon} alt="" src={thumbnail} />
          <div className={styles.ytdThumbnailOverlayTimeSta}>
            <div className={styles.minutes19Seconds}>
              <div className={styles.div}>{videoLength}</div>
            </div>
          </div>
        </button>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.a}>
              <div className={styles.figmaDesignToLiveDashboard}>
                <div className={styles.figmaDesignTo}>{videoTitle}</div>
              </div>
              <div className={styles.div3}>
                <div className={styles.divmetadata}>
                  <div className={styles.divbylineContainer}>
                    <div className={styles.divcontainer}>
                      <div className={styles.ytFormattedString}>
                        <div className={styles.locofy}>{channelName}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>{viewsAndTime}</div>
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

export default RelatedVideo;
