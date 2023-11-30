import React, { useEffect, useState } from 'react'

export default function CatFacts() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState('aksdnjk')

  useEffect(() => {
    setMsg('')
    setLoading(true)
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
      .then(res => res.json())
      .then(json => {
        // console.log(json.Results);
        setList(json.Results)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setMsg(error.message)
        setLoading(false)
      });

  }, [])




  return (
    <div>
      {
        loading ?
          <>
            Loading...
            <progress />
          </>
          :
          <ol>
            {list.map((item) => {
              return (
                <li>
                  <b>{item.Mfr_Name}</b>
                  <br />
                  {item.Country}
                </li>
              )
            })}
            {msg}
          </ol>
      }


    </div>
  )
}
