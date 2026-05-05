import { useEffect, useState } from "react";
import { fetchVideos } from "../services/youtube.api";
import VideoCard from "../components/video";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(videos)

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const res = await fetchVideos();

        if (res.success) {
          setVideos(res.data.data); 
        } else {
          setError("Failed to load videos");
        }
      } catch (err) {
        setError("API error");
      }
      setLoading(false);
    };

    loadVideos();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {videos.map((videoWrapper) => {
  const video = videoWrapper.items;

  return (
    <VideoCard
      key={video.id}
      video={video}
    />
  );
})}
    </div>
  );
}