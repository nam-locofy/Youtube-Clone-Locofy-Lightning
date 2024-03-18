import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./ytd-masthead1.module.css";

const YtdMasthead1: NextPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onYtdTopbarLogoRendererClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSearchClick = useCallback(() => {
    // Please sync "Search Results" to the project
  }, []);

  return (
    <>
      <header className={styles.ytdMasthead}>
        <div className={styles.inputConnector}>
          <div className={styles.outputPort}>
            <div className={styles.ytIconButton} onClick={openMenu}>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg1.svg"
              />
            </div>
          </div>
          <img
            className={styles.ytdTopbarLogoRendererIcon}
            loading="lazy"
            alt=""
            src="/ytdtopbarlogorenderer.svg"
            onClick={onYtdTopbarLogoRendererClick}
          />
        </div>
        <div className={styles.merger}>
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
                <img className={styles.svgIcon1} alt="" src="/svg.svg" />
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
        <div className={styles.nestedLoop}>
          <div className={styles.ifStatement}>
            <img
              className={styles.ytIconButton1}
              loading="lazy"
              alt=""
              src="/yticonbutton.svg"
            />
            <div className={styles.whileLoop}>
              <button className={styles.a}>
                <div className={styles.reduce}>
                  <img className={styles.svgIcon2} alt="" src="/svg-1.svg" />
                </div>
                <div className={styles.div}>
                  <div className={styles.signIn}>Sign in</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeMenu}>
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default YtdMasthead1;
