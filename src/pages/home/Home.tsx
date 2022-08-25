import React, { useEffect } from 'react'
import CreateNft from '../../components/home/createNft/CreateNft'
import LiveAuctions from '../../components/home/liveAuctions/LiveAuctions'
import Title from '../../components/home/title/Title'
import { fetchItems } from '../../redux/cards/asyncActions'
import { useAppDispatch, useAppSelector  } from '../../redux/store'
import './Home.scss'

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryText,currentPage } = useAppSelector((state) => state.filters);

  const getItems = async () => { 
    const category = categoryText !== 'All' ? categoryText : '';
    dispatch(
      fetchItems({
        category,
        currentPage:currentPage
      })
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