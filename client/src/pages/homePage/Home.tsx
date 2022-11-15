import React, { useEffect } from 'react'

import { authorizationHeaders } from '../../api/fetchWrappers'
import { getProfile } from '../../redux/auth/getProfile/asyncActions'
import { fetchItems } from '../../redux/cards/asyncActions'
import { useAppDispatch, useAppSelector  } from '../../redux/store'

import CreateNft from './components/createNft/CreateNft'
import BlockTitle from './components/BlockTitle/BlockTitle'
import LiveAuctions from './components/liveAuctions/LiveAuctions'

const Home = () =>  {
  const dispatch = useAppDispatch();
  const { categoryText,currentPage, searchValue,sort } = useAppSelector((state) => state.filters);
  const { userInfo,isLoading } = useAppSelector((state) => state.getProfileInfo);
  // useEffect(() => {
  //   if(!userInfo){
  //     dispatch(getProfile())
  //   }
  // }, [userInfo, dispatch])

  const getItems = async () => { 
    const category = categoryText !== 'All' ? categoryText : '';
    const search = searchValue
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');  
    dispatch(
      fetchItems({
        sortBy,
        category,
        currentPage:currentPage,
        search,
        order
      })
    )}

    useEffect(() => {
      getItems()
    }, [])
 

  return (
    <>   
    <BlockTitle/>
    <CreateNft/>
    <LiveAuctions/>
    </>
  )
}

export default Home