import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios"

const Price = () => {
  // set variables
  const [coin, setCoin] = useState(null)
  const params = useParams()
  // Grabbing the currency symbol from the URL Params.
  const symbol = params.symbol
  const apiKey = import.meta.env.VITE_apiKey
  // Using the other two variables to create our URL.
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  useEffect(() => {
    // function to get coin data
    async function getCoin() {
      try {
        let response = await axios.get(url)
        setCoin(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getCoin()
  }, [])

  // loading function
  const loading = () => {
    return <h2>Loading, please wait</h2>
  }

  //loaded function
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )

  }
  return coin? loaded(): loading()

}

export default Price