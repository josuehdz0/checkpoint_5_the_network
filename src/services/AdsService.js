import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"

class AdsService{
  async getAds(){
    const res = await api.get('api/ads')
    logger.log('getting ads', res.data)
    
  }
}
export const adsService = AdsService()