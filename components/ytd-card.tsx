import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ytb-card.module.css";

export type YtbCardType = {
  thumbnail?: string;
  channelLogo?: string;
  videoTitle?: string;
  channelName?: string;
  views?: string;
  time?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];

  /** Action props */
  onYtdCardContainerClick?: () => void;
};

const YtbCard: NextPage<YtbCardType> = ({
  thumbnail,
  channelLogo,
  videoTitle,
  channelName,
  views,
  time,
  propMinWidth,
  propPadding,
  propMinWidth1,
  propMinWidth2,
  onYtdCardContainerClick,
}) => {
  const tecHOWStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divmetadataLineStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const viewsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const hoursAgoStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={styles.ytdCard} onClick={onYtdCardContainerClick}>
      <img
        className={styles.ytdThumbnailIcon}
        loading="lazy"
        alt=""
        src={thumbnail}
      />
      <div className={styles.ytdDescription}>
        <img
          className={styles.zMnvfkkjr08efltsqqm53qn7x3gyIcon}
          loading="lazy"
          alt=""
          src={channelLogo}
        />
        <div className={styles.divmeta}>
          <div className={styles.coolestNewGadgets}>{videoTitle}</div>
          <div className={styles.divmetadata}>
            <div className={styles.techow} style={tecHOWStyle}>
              {channelName}
            </div>
            <div
              className={styles.divmetadataLine}
              style={divmetadataLineStyle}
            >
              <div className={styles.views} style={viewsStyle}>
                {views}
              </div>
              <div className={styles.hoursAgo} style={hoursAgoStyle}>
                {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YtbCard;
