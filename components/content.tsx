import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import YtbCard from './ytd-card';
import styles from './content.module.css';

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  channelId: string;
  channelLogo: string;
  views: number;
  publishedAt: Date;
};

const Content: React.FC = () => {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Fetch popular videos
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=12&regionCode=GB&key=${API_KEY}`
        );
        const data = await res.json();
        const videoData: Video[] = await Promise.all(
          data.items.map(async (video: any) => {
            // Fetch channel logo
            const channelRes = await fetch(
              `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${API_KEY}`
            );
            const channelData = await channelRes.json();
            const channelLogo = channelData.items[0].snippet.thumbnails.default.url;
            return {
              id: video.id,
              title: video.snippet.title,
              thumbnail: video.snippet.thumbnails.high.url,
              channelTitle: video.snippet.channelTitle,
              channelId: video.snippet.channelId,
              channelLogo: channelLogo,
              views: video.statistics.viewCount,
              publishedAt: video.snippet.publishedAt,
            };
          })
        );
        setVideos(videoData);
      } catch (error) {
        console.error('Failed to fetch videos', error);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  const handleVideoClick = (videoId: string) => {
    router.push(`/video-page?id=${videoId}`);
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  const formatDate = (date: Date) => {
    const timeDiff = new Date().getTime() - new Date(date).getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    if (daysDiff < 1) {
      return 'Today';
    } else if (daysDiff < 7) {
      return `${daysDiff} days ago`;
    }
    const monthsDiff = Math.floor(daysDiff / 30);
    if (monthsDiff < 1) {
      return `${daysDiff} days ago`;
    } else if (monthsDiff < 12) {
      return `${monthsDiff} months ago`;
    }
    return `${Math.floor(monthsDiff / 12)} years ago`;
  };

  return (
    <div className={styles.divcontents}>
      {videos.map((video) => (
        <YtbCard
          key={video.id}
          thumbnail={video.thumbnail}
          channelLogo={video.channelLogo}
          videoTitle={video.title}
          channelName={video.channelTitle}
          views={formatViews(video.views)}
          time={formatDate(video.publishedAt)}
          propMinWidth="47px"
          propPadding="var(--padding-11xs) var(--padding-15xl-5) var(--padding-11xs) 0px"
          propMinWidth1="54px"
          propMinWidth2="77px"
          onYtdCardContainerClick={() => handleVideoClick(video.id)}
        />
      ))}
    </div>
  );
};

export default Content;
