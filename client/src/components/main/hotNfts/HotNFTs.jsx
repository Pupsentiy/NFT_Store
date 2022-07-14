import React from 'react'
import "./HotNFTs.scss"

const HotNFTs = () => {
  return (
    <div className='hotNFTs'>
        <div className="container">
                <div className="hotNFTs__header">
                    <h2 className="hotNFTs__title">Hot NFts</h2>
                </div>
                <nav className="hotNFTs__wrapper-nav">
                    <button className="hotNFTs__btn-nav">Music</button>
                    <button className="hotNFTs__btn-nav">Art</button>
                    <button className="hotNFTs__btn-nav">Sports</button>
                    <button className="hotNFTs__btn-nav">Virtual</button>
                    <button className="hotNFTs__btn-nav">Videos</button>
                    <button className="hotNFTs__btn-nav">More</button>
                </nav>
        </div>
    </div>
  )
}

export default HotNFTs