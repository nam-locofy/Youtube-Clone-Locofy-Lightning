import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import YtdMasthead1 from '../components/ytd-masthead1';
import Main from '../components/main';
import RightPanel from '../components/right-panel';
import styles from './video-page.module.css';

const VideoPage: React.FC = () => {
  const router = useRouter();
  const { id: videoId } = router.query;
  const [videoData, setVideoData] = useState({
    videoSrc: '',
    videoTitle: '',
    channelLogo: '',
    channelName: '',
    subsCount: '',
    views: '',
    publishedAt: '',
  });
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchVideoDetails = async () => {
      if (!videoId) return;
      try {
        // Fetch video details
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`
        );
        const videoJson = await videoRes.json();
        const video = videoJson.items[0];

        // Fetch channel details
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?id=${video.snippet.channelId}&part=snippet,statistics&key=${API_KEY}`
        );
        const channelJson = await channelRes.json();
        const channel = channelJson.items[0];

        setVideoData({
          videoSrc: `https://www.youtube.com/embed/${videoId}?rel=0`,
          videoTitle: video.snippet.title,
          channelLogo: channel.snippet.thumbnails.default.url,
          channelName: video.snippet.channelTitle,
          subsCount: formatCount(channel.statistics.subscriberCount),
          views: formatCount(video.statistics.viewCount) + ' views',
          publishedAt: formatDate(video.snippet.publishedAt),
        });
      } catch (error) {
        console.error('Failed to fetch video details', error);
      }
    };

    fetchVideoDetails();
  }, [videoId, API_KEY]);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(2) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(2) + 'K';
    } else {
      return count.toString();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const monthsDiff = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
    if (monthsDiff < 1) {
      return 'Less than a month ago';
    } else if (monthsDiff < 12) {
      return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
    } else {
      const yearsDiff = Math.floor(monthsDiff / 12);
      return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className={styles.videoPage}>
      <YtdMasthead1 />
      <div className={styles.div} />
      <div className={styles.divcontents} />
      <main className={styles.returnStatement}>
        <section className={styles.variableAssignment}>
          <Main
            videoSrc={videoData.videoSrc}
            videoTitle={videoData.videoTitle}
            channelLogo={videoData.channelLogo}
            channelName={videoData.channelName}
            subsCount={videoData.subsCount + ' subscribers'}
            viewsAndTime={`${videoData.views} • ${videoData.publishedAt}`}
          />
          <RightPanel />
        </section>
      </main>
    </div>
  );
};

export default VideoPage;
