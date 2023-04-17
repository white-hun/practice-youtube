// import { Outlet } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import SearchHeader from "./components/SearchHeader";
// import { YoutubeApiProvider } from "./context/YoutubeApiContext";

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <>
//       <SearchHeader />
//       <YoutubeApiProvider>
//         <QueryClientProvider client={queryClient}>
//           <Outlet />
//         </QueryClientProvider>
//       </YoutubeApiProvider>
//     </>
//   );
// }

// export default App;

//-------------------------------------------------------------------------------------------
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
