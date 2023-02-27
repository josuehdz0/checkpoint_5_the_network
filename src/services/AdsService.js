import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Ad } from "../models/Ad.js"


class AdsService{
  async getAds(){
    const res = await api.get('api/ads')
    logger.log('getting ads', res.data)
    AppState.ads = res.data.map(a => new Ad(a))
  }
}
export const adsService = new AdsService()