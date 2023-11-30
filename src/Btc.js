import React, { useEffect, useState } from 'react'

export default function Btc() {
  const [price, setPrice] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(json => {
        // console.log(json.bpi);
        setPrice(json.bpi)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h2>BITCION PRICE</h2>
      {
        loading ? <progress /> :
          <>
            <p>${price?.USD.rate}</p>
            <p>£{price?.GBP.rate}</p>
            <p>€{price?.EUR.rate}</p>
          </>
      }
    </div>
  )
}
