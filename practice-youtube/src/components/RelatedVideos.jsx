import React from "react";
import Youtube from "../api/Youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: related,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {related && (
        <ul>
          {related.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
