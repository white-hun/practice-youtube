import axios from "axios";

export default class YoutubeClient {
  async search() {
    return axios.get("/videos.bts.json");
  }

  async videos() {
    return axios.get("/videos.popular.json");
  }
}

//-------------------------------------------------------------------------------------------
