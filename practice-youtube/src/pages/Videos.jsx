// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import VideoCard from "../components/VideoCard";
// import { useYoutubeApi } from "../context/YoutubeApiContext";

// export default function Videos() {
//   const { keyword } = useParams();
//   const { youtube } = useYoutubeApi();
//   const {
//     isLoading,
//     error,
//     data: videos,
//   } = useQuery(["videos", keyword], () => youtube.search(keyword));
//   return (
//     <>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error.massage}</p>}
//       {videos && (
//         <ul>
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

//-------------------------------------------------------------------------------------------
