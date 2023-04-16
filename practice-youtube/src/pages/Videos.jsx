import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch("/videos/popular.json")
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.massage}</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
