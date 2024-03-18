import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.divitemsParent}>
      <div className={styles.divitems}>
        <div className={styles.ytdGuideEntryRenderer}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg-2.svg" />
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem1}>
            <img
              className={styles.svgIcon1}
              loading="lazy"
              alt=""
              src="/svg-3.svg"
            />
            <div className={styles.shortsWrapper}>
              <div className={styles.shorts}>Shorts</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer2}>
          <div className={styles.tpYtPaperItem2}>
            <img
              className={styles.svgIcon2}
              loading="lazy"
              alt=""
              src="/svg-4.svg"
            />
            <div className={styles.subscriptionsWrapper}>
              <div className={styles.subscriptions}>Subscriptions</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divitems1}>
        <div className={styles.ytdGuideEntryRenderer3}>
          <img className={styles.svgIcon3} alt="" src="/svg-5.svg" />
          <div className={styles.libraryWrapper}>
            <div className={styles.library}>Library</div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer4}>
          <img
            className={styles.svgIcon4}
            loading="lazy"
            alt=""
            src="/svg-6.svg"
          />
          <div className={styles.historyWrapper}>
            <div className={styles.history}>History</div>
          </div>
        </div>
      </div>
      <div className={styles.ytdGuideSigninPromoRendere}>
        <div className={styles.signInTo}>
          Sign in to like videos, comment, and subscribe.
        </div>
        <button className={styles.a}>
          <div className={styles.svgWrapper}>
            <img className={styles.svgIcon5} alt="" src="/svg-1.svg" />
          </div>
          <div className={styles.div}>
            <div className={styles.signIn}>Sign in</div>
          </div>
        </button>
      </div>
      <div className={styles.ytdGuideSectionRenderer}>
        <div className={styles.exploreWrapper}>
          <div className={styles.explore}>Explore</div>
        </div>
        <div className={styles.divitems2}>
          <div className={styles.ytdGuideEntryRenderer5}>
            <div className={styles.tpYtPaperItem3}>
              <img
                className={styles.svgIcon6}
                loading="lazy"
                alt=""
                src="/svg-8.svg"
              />
              <div className={styles.trendingWrapper}>
                <div className={styles.trending}>Trending</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer6}>
            <div className={styles.tpYtPaperItem4}>
              <img
                className={styles.svgIcon7}
                loading="lazy"
                alt=""
                src="/svg-9.svg"
              />
              <div className={styles.musicWrapper}>
                <div className={styles.music}>Music</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer7}>
            <div className={styles.tpYtPaperItem5}>
              <img
                className={styles.svgIcon8}
                loading="lazy"
                alt=""
                src="/svg-10.svg"
              />
              <div className={styles.moviesTvWrapper}>
                <div className={styles.moviesTv}>{`Movies & TV`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer8}>
            <div className={styles.tpYtPaperItem6}>
              <img
                className={styles.svgIcon9}
                loading="lazy"
                alt=""
                src="/svg-11.svg"
              />
              <div className={styles.liveWrapper}>
                <div className={styles.live}>Live</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer9}>
            <div className={styles.tpYtPaperItem7}>
              <img
                className={styles.svgIcon10}
                loading="lazy"
                alt=""
                src="/svg-12.svg"
              />
              <div className={styles.gamingWrapper}>
                <div className={styles.gaming}>Gaming</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer10}>
            <div className={styles.tpYtPaperItem8}>
              <img
                className={styles.svgIcon11}
                loading="lazy"
                alt=""
                src="/svg-13.svg"
              />
              <div className={styles.newsWrapper}>
                <div className={styles.news}>News</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer11}>
            <div className={styles.tpYtPaperItem9}>
              <img
                className={styles.svgIcon12}
                loading="lazy"
                alt=""
                src="/svg-14.svg"
              />
              <div className={styles.sportsWrapper}>
                <div className={styles.sports}>Sports</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer12}>
            <div className={styles.tpYtPaperItem10}>
              <img
                className={styles.svgIcon13}
                loading="lazy"
                alt=""
                src="/svg-15.svg"
              />
              <div className={styles.learningWrapper}>
                <div className={styles.learning}>Learning</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer13}>
            <div className={styles.tpYtPaperItem11}>
              <img
                className={styles.svgIcon14}
                loading="lazy"
                alt=""
                src="/svg-16.svg"
              />
              <div className={styles.fashionBeautyWrapper}>
                <div className={styles.fashionBeauty}>{`Fashion & Beauty`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer14}>
            <div className={styles.tpYtPaperItem12}>
              <img
                className={styles.svgIcon15}
                loading="lazy"
                alt=""
                src="/svg-17.svg"
              />
              <div className={styles.podcastsWrapper}>
                <div className={styles.podcasts}>Podcasts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
