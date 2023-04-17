// import { createContext, useContext } from "react";
// import Youtube from "../api/Youtube";
// import YoutubeClient from "../api/YoutubeClient";

// export const YoutubeApiContext = createContext();

// const client = new YoutubeClient();
// const youtube = new Youtube(client);

// export function YoutubeApiProvider({ children }) {
//   return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
// }

// export function useYoutubeApi() {
//   return useContext(YoutubeApiContext);
// }

// new Youtube를 호출
// 1. 새로운 객체 생성
// 2. 넘겨받은 인수(client)와 함께 constructor가 자동으로 실행,
//    이때 인수 client가 class<Youtube> - this.apiClient에 할당
// 3. 이 과정을 거친 후 데이터를 가져오는 부분에서 youtube.search(keyword) 같은 객체 메서드를 호출할 수 있다

// new Youtube(client)실행 시 알고리즘
// 1. 빈 객체를 만들어 this에 할당( this = {}; )
// 2. 함수 본문(<Youtube> - search)을 실행,
//    --> keyword가 있을 때를 예로 들면,
//        1. keyword를 받아서 #searchByKeyword를 실행,
//        2. client(<YoutubeClient>)에 params를 전달하고 받은 데이터를 then으로 처리
//           (--> client 가 인수(property)로 할당) -->
//           --> this에 새로운 property(this.apiClient=apiClient)를 추가해 this를 수정
// 3. 암시적으로 this를 반환

// 객체 메서드 호출 useQuery의 두번째 인자 callback함수에 사용 () => youtube.search(keyword)

//-------------------------------------------------------------------------------------------
