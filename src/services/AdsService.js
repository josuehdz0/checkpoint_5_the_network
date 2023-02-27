import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class AdsService{
  async getAds(){
    const res = await api.get('api/ads')
    logger.log('getting ads', res.data)
    AppState.ads = res.data
  }
}
export const adsService = new AdsService()