import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalDrawer from "./portal-drawer";
import styles from "./ytd-masthead.module.css";

const YtdMasthead: NextPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onSearchClick = useCallback(() => {
    // Please sync "Search Results" to the project
  }, []);

  return (
    <>
      <div className={styles.ytdMasthead}>
        <div className={styles.frameParent}>
          <div className={styles.ytIconButtonWrapper}>
            <div className={styles.ytIconButton} onClick={openMenu}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <img
            className={styles.ytdTopbarLogoRendererIcon}
            loading="lazy"
            alt=""
            src="/ytdtopbarlogorenderer.svg"
          />
        </div>
        <div className={styles.divcenterWrapper}>
          <div className={styles.divcenter}>
            <div className={styles.ytdSearchbox}>
              <div className={styles.divcontainer}>
                <input
                  className={styles.search}
                  placeholder="Search"
                  type="text"
                />
              </div>
              <button className={styles.search1} onClick={onSearchClick}>
                <img className={styles.svgIcon} alt="" src="/svg.svg" />
              </button>
            </div>
            <img
              className={styles.divvoiceSearchButtonIcon}
              loading="lazy"
              alt=""
              src="/divvoicesearchbutton.svg"
            />
          </div>
        </div>
        <div className={styles.svg}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <div className={styles.ytdMastheadInner}>
          <div className={styles.ytIconButtonParent}>
            <img
              className={styles.ytIconButton1}
              loading="lazy"
              alt=""
              src="/yticonbutton.svg"
            />
            <div className={styles.aWrapper}>
              <button className={styles.a}>
                <div className={styles.svgWrapper}>
                  <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
                </div>
                <div className={styles.div}>
                  <div className={styles.signIn}>Sign in</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default YtdMasthead;
