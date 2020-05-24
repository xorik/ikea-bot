import axios from 'axios'

interface IkeaResponse {
  StockAvailability: {
    RetailItemAvailability: {
      AvailableStock: {
        $: string
      }
    }
  }
}

const IKEA_HEADERS = {
  Accept: 'application/vnd.ikea.iows+json;version=1.0',
  Contract: '37249',
  Consumer: 'MAMMUT',
}

class Ikea {
  public async checkAviability(itemId: number, shopId: string): Promise<boolean> {
    const response = await axios.get<IkeaResponse>(
      `https://iows.ikea.com/retail/iows/de/de/stores/${shopId}/availability/ART/${itemId}`,
      {headers: IKEA_HEADERS}
    )

    return response.data.StockAvailability.RetailItemAvailability.AvailableStock.$ !== '0'
  }
}

export {
  Ikea
}
