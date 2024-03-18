import type { NextPage } from "next";
import styles from "./main.module.css";

export type MainType = {
  videoSrc?: string;
  videoTitle?: string;
  channelLogo?: string;
  channelName?: string;
  subsCount?: string;
  viewsAndTime?: string;
};

const Main: NextPage<MainType> = ({
  videoSrc,
  videoTitle,
  channelLogo,
  channelName,
  subsCount,
  viewsAndTime,
}) => {
  return (
    <div className={styles.functionDefinition}>
      <div className={styles.methodCall}>
        <div className={styles.youtubePlayerContainer}>
          <iframe
            className={styles.youtubeVideoPlayer}
            src={videoSrc}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className={styles.objectInitialization}>
        <div className={styles.propertyAccess}>
          <div className={styles.locofyQuickBuilds}>Locofy Quick Builds</div>
          <h2 className={styles.figmaDesignTo}>{videoTitle}</h2>
        </div>
        <div className={styles.divtopRow}>
          <div className={styles.stringManipulation}>
            <div className={styles.mathOperations}>
              <img
                className={styles.ytImgShadowIcon}
                loading="lazy"
                alt=""
                src={channelLogo}
              />
            </div>
            <div className={styles.logicalOperators}>
              <div className={styles.ytFormattedString}>
                <div className={styles.locofy}>{channelName}</div>
              </div>
              <div className={styles.kSubscribers}>
                <div className={styles.kSubscribers1}>{subsCount}</div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <div className={styles.div}>
                  <div className={styles.subscribe}>Subscribe</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.fileIO}>
            <div className={styles.databaseAccess}>
              <div className={styles.ytdSegmentedLikeDislikeBut}>
                <div className={styles.likeThisVideoAlongWith169}>
                  <div className={styles.condBranch}>
                    <img className={styles.svgIcon} alt="" src="/svg-31.svg" />
                  </div>
                  <div className={styles.outputList}>169</div>
                </div>
                <div className={styles.dislikeThisVideo}>
                  <div className={styles.likeThisVideoAlongWith1691} />
                  <img className={styles.svgIcon1} alt="" src="/svg-41.svg" />
                </div>
              </div>
            </div>
            <div className={styles.functionCall}>
              <button className={styles.share}>
                <img className={styles.svgIcon2} alt="" src="/svg-51.svg" />
                <div className={styles.shareWrapper}>
                  <div className={styles.share1}>Share</div>
                </div>
              </button>
            </div>
            <button className={styles.saveToPlaylist}>
              <img
                className={styles.containerBIcon}
                alt=""
                src="/container-b.svg"
              />
              <div className={styles.saveWrapper}>
                <div className={styles.save}>Save</div>
              </div>
            </button>
            <img
              className={styles.moreActionsIcon}
              loading="lazy"
              alt=""
              src="/more-actions.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.nestedConditions}>
        <div className={styles.divdescription}>
          <div className={styles.kViews3}>{viewsAndTime}</div>
          <div className={styles.inThisVideoContainer}>
            <p className={styles.inThisVideo}>
              In this video you'll be learning how to go from a popular Figma
              design template to a Live Website using Locofy.ai!
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.withLocofyaiYouCanTurnYo}>
              <span>{`With Locofy.ai you can turn your Figma designs into React, React Native, HTML-CSS, Next.js or Gatsby code and ship 5x faster... `}</span>
              <b className={styles.showMore}>Show more</b>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.algorithmLogic}>
        <div className={styles.frameParent}>
          <div className={styles.commentsWrapper}>
            <div className={styles.comments}>51 Comments</div>
          </div>
          <div className={styles.sortComments}>
            <img className={styles.svgIcon3} alt="" src="/svg-61.svg" />
            <div className={styles.sortByWrapper}>
              <div className={styles.sortBy}>Sort by</div>
            </div>
          </div>
        </div>
        <div className={styles.linkedLists}>
          <img
            className={styles.ytImgShadowIcon1}
            alt=""
            src="/ytimgshadow-1@2x.png"
          />
          <div className={styles.addACommentWrapper}>
            <div className={styles.addAComment}>Add a comment...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
