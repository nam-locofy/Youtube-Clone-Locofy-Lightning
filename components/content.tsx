import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import YtbCard from "./ytd-card";
import styles from "./content.module.css";

const Content: NextPage = () => {
  const router = useRouter();

  const onYtdCardContainerClick = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdCardContainer1Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdCardContainer2Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdCardContainer3Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  return (
    <div className={styles.divcontents}>
      <YtbCard
        thumbnail="/ytdthumbnail@2x.png"
        channelLogo="/8zmnvfkkjr08efltsqqm5-3qn7x3gy0ffr0dy6mqscdddxj1zfwnumsa4i8gwtvpdqkwbds68ckc0x00ffffffnorj@2x.png"
        videoTitle="10 COOLEST New Gadgets And Inventions YOU SHOULD HAVE!"
        channelName="TecHOW"
        views="615 views"
        time="• 19 hours ago"
        propMinWidth="47px"
        propPadding="var(--padding-11xs) var(--padding-15xl-5) var(--padding-11xs) 0px"
        propMinWidth1="54px"
        propMinWidth2="77px"
        onYtdCardContainerClick={onYtdCardContainerClick}
      />
      <YtbCard
        thumbnail="/ytdthumbnail-1@2x.png"
        channelLogo="/8zmnvfkkjr08efltsqqm5-3qn7x3gy0ffr0dy6mqscdddxj1zfwnumsa4i8gwtvpdqkwbds68ckc0x00ffffffnorj-1@2x.png"
        videoTitle="The New Youngest Self-Made Billionaire In The World Is A 25-"
        channelName="Forbes"
        views="2M views"
        time="• 5 months ago"
        propMinWidth="37px"
        propPadding="var(--padding-11xs) var(--padding-14xl-5) var(--padding-11xs) 0px"
        propMinWidth1="51px"
        propMinWidth2="81px"
        onYtdCardContainerClick={onYtdCardContainer1Click}
      />
      <YtbCard
        thumbnail="/ytdthumbnail-2@2x.png"
        channelLogo="/8zmnvfkkjr08efltsqqm5-3qn7x3gy0ffr0dy6mqscdddxj1zfwnumsa4i8gwtvpdqkwbds68ckc0x00ffffffnorj-2@2x.png"
        videoTitle="lofi hip hop radio - beats to relax/study to"
        channelName="Lofi Girl"
        views="8124 views"
        time="• 5 months ago"
        propMinWidth="42px"
        propPadding="var(--padding-11xs) var(--padding-4xl-5) var(--padding-11xs) 0px"
        propMinWidth1="61px"
        propMinWidth2="81px"
        onYtdCardContainerClick={onYtdCardContainer2Click}
      />
      <YtbCard
        thumbnail="/ytdthumbnail-3@2x.png"
        channelLogo="/8zmnvfkkjr08efltsqqm5-3qn7x3gy0ffr0dy6mqscdddxj1zfwnumsa4i8gwtvpdqkwbds68ckc0x00ffffffnorj-3@2x.png"
        videoTitle="Baby Hippo Raised By Rhinos Meets A Hippo... ❤️ | The Dodo Go "
        channelName="The Dodo"
        views="4.3M views"
        time="• 3 days ago"
        propMinWidth="52px"
        propPadding="var(--padding-11xs) var(--padding-20xl-5) var(--padding-11xs) 0px"
        propMinWidth1="61px"
        propMinWidth2="65px"
        onYtdCardContainerClick={onYtdCardContainer3Click}
      />
    </div>
  );
};

export default Content;
