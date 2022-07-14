import React from 'react'
import CreateNft from './createNft/CreateNft'
import Discover from './discover/Discover'
import HotNFTs from './hotNfts/HotNFTs'
import LiveAuctions from './liveAuctions/LiveAuctions'

const Container = () => {

  // import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://api.nftport.xyz/v0/nfts/0xb6c035ebc715d2e14946b03d49709140b86f1a75',
//   params: {
//     chain: 'ethereum',
//     contract_address: '0xb6c035ebc715d2e14946b03d49709140b86f1a75',
//     page_size: '50',
//     include: 'metadata'
//   },
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: '8376b21d-927d-4cd3-b09a-94c54c65b88c'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
  return (
    <>
    <Discover/>
    <CreateNft/>
    <LiveAuctions/>
    <HotNFTs/>
    </>
  )
}

export default Container