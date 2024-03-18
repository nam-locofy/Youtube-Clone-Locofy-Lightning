import type { NextPage } from "next";
import YtdCompactVideoRenderer from "./ytd-compact-video-renderer";
import RelatedVideo from "./related-video";
import styles from "./right-panel.module.css";

const RightPanel: NextPage = () => {
  return (
    <div className={styles.rightPanel}>
      <YtdCompactVideoRenderer />
      <RelatedVideo
        thumbnail={`https://d1xzdqg8s8ggsr.cloudfront.net/65f7aea0addea93a2df73f84/edda295f-d966-494f-abbf-f9d102b25090_1710731040599612718?Expires=-62135596800&Signature=DziTu0l7N6RZGgvydBbm6d33~2tev5pz3YL~hpH3PVcdE4FcSv8qfm3xlJ3czS6SF-TFrhsb~--~eEQMwB3Kdk0s3fIlELBs2ZhAoaxa7set12ju6EtgacexjZfdeL6dW6JfpVUL-ipfs0dhKusbnCsAXYFZIHZI4UaBFWF-Gczn7cNBeb-~H4RfGBqIzyW4E0jmtQIAMhZY7ja7XbORUPCRjWv~S8AHPSHjh8ekc54JBlkAnZ3QUS7VhSOgprA~tyljNuATZw8~bfflxnD7CQJYSQQh84vdDDOjym83s65HCeL2j4WHMdnDFtYIT8gwmsw-FVS26vuXBsWeTL-10Q__&Key-Pair-Id=K1P54FZWCHCL6J`}
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
      <RelatedVideo
        thumbnail="/hqdefaultjpg@2x.png"
        videoTitle="Figma design to live dashboard with Locofy.ai"
        channelName="Locofy"
        viewsAndTime="2.5K views • 2 months ago"
        videoLength="50:19"
      />
    </div>
  );
};

export default RightPanel;
