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

                <section className="hotNFTs__block-createNft">
                  <h2 className="hotNFTs__title-createNft">Create Your Own NFT!</h2>
                  <p className="hotNFTs__discription">We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</p>
                  <button className="hotNFTs__creat-btn">Join Comunity Now</button>
                </section>
        </div>
    </div>
  )
}

export default HotNFTs