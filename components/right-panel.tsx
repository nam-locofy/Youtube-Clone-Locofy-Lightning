import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import YtdCompactVideoRenderer from './ytd-compact-video-renderer';
import RelatedVideo from './related-video';
import styles from './right-panel.module.css';

const RightPanel: React.FC = () => {
  const router = useRouter();
  const { id: videoId } = router.query;
  const [relatedVideos, setRelatedVideos] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      if (!videoId) return;
      try {
        // Fetch the current video to get the channelId
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${API_KEY}`
        );
        const videoData = await videoRes.json();
        const channelId = videoData.items[0].snippet.channelId;

        // Fetch related videos by channelId
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&type=video&key=${API_KEY}`
        );
        const searchData = await searchRes.json();
        const videoIds = searchData.items.map((item) => item.id.videoId).join(',');

        // Fetch details for related videos including their duration
        const detailsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&part=contentDetails,snippet,statistics&key=${API_KEY}`
        );
        const detailsData = await detailsRes.json();

        const videos = detailsData.items.map((video) => ({
          id: video.id,
          thumbnail: video.snippet.thumbnails.high.url,
          videoTitle: video.snippet.title,
          channelName: video.snippet.channelTitle,
          viewsAndTime: `${formatCount(video.statistics.viewCount)} views • ${formatDate(video.snippet.publishedAt)}`,
          videoLength: formatDuration(video.contentDetails.duration),
        }));

        setRelatedVideos(videos);
      } catch (error) {
        console.error('Failed to fetch related videos', error);
      }
    };

    fetchRelatedVideos();
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

  const formatDuration = (isoDuration) => {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = parseInt(match[1], 10) || 0;
    const minutes = parseInt(match[2], 10) || 0;
    const seconds = parseInt(match[3], 10) || 0;
    return [hours, minutes, seconds]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(':')
      .replace(/^0/, ''); // Remove leading zero
  };

  const handleVideoClick = (videoId) => {
    router.push(`/video-page?id=${videoId}`);
  };

  return (
    <div className={styles.rightPanel}>
      {relatedVideos.map((video) => (
        <div key={video.id} onClick={() => handleVideoClick(video.id)}>
          <RelatedVideo
            thumbnail={video.thumbnail}
            videoTitle={video.videoTitle}
            channelName={video.channelName}
            viewsAndTime={video.viewsAndTime}
            videoLength={video.videoLength}
          />
        </div>
      ))}
    </div>
  );
};

export default RightPanel;
