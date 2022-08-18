import React, { useEffect } from 'react'
import CreateNft from '../../components/home/createNft/CreateNft'
import LiveAuctions from '../../components/home/liveAuctions/LiveAuctions'
import Title from '../../components/home/title/Title'
import { fetchItems } from '../../redux/cards/asyncActions'
import { useAppDispatch  } from '../../redux/store'
import './Home.scss'

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const getItems = async () => { 
    dispatch(
      fetchItems()
    )}

    useEffect(() => {
      getItems()
    }, [])
 
  return (
    <>   
    <Title/>
    <CreateNft/>
    <LiveAuctions/>
    </>
  )
}

export default Home