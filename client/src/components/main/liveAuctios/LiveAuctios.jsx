import React, { useEffect } from 'react'

const LiveAuctios = () => {
  
  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets')
      .then(res => res.json())
      .then((body) => {
        console.log(body);
      })
  
  }, [])
  return (
    <div className='liveAuctios'>
      <div className="container">
        <div className="liveAuctios__header">
          <h3 className="liveAuctios__title">Live Auctions</h3>
          <button className='liveAuctios__btn'></button>
        </div>
        <div className="liveAuctios__wrapper">
          <div className="liveAuctios__card">

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LiveAuctios