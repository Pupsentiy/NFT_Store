import React from 'react'
import CreateNft from '../../components/home/createNft/CreateNft'
import HotNFTs from '../../components/home/hotNfts/HotNFTs'
import LiveAuctions from '../../components/home/liveAuctions/LiveAuctions'
import Title from '../../components/home/title/Title'
import './Home.scss'

const Home = () => {
  return (
    <>   
    <Title/>
    <CreateNft/>
    <LiveAuctions/>
    <HotNFTs/>
   
    </>
  )
}

export default Home