import { createContext, useContext } from "react";
import Youtube from "../api/Youtube";
import YoutubeClient from "../api/YoutubeClinet";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

// new Youtube를 호출
// 1. 새로운 객체 생성
// 2. 넘겨받은 인수(client)와 함께 constructor가 자동으로 실행,
//    이때 인수 client가 class<Youtube> - this.apiClient에 할당
// 3. 이 과정을 거친 후 데이터를 가져오는 부분, youtube.search(keyword) 같은 객체 메서드를 호출할 수 있음
