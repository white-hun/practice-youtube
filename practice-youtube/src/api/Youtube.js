export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // constructor()
  //객체의 기본 상태를 설정해주는 생성자 메서드
  // new에 의해 자동으로 호출되므로,특별한 절차 없이 객체를 초기화 할 수 있다

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(channelId) {
    return this.apiClient
      .channels({ params: { part: "snippet", id: channelId } })
      .then((res) => res?.data?.items[0]?.snippet?.thumbnails?.default?.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res?.data?.items?.map((item) => ({ ...item, id: item?.id?.videoId })));
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res?.data?.items?.map((item) => ({ ...item, id: item?.id?.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]
