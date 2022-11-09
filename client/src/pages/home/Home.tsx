import React, { useEffect } from 'react'
import { authorizationHeaders } from '../../api/fetchWrappers'
import CreateNft from '../../components/home/createNft/CreateNft'
import LiveAuctions from '../../components/home/liveAuctions/LiveAuctions'
import Title from '../../components/home/title/Title'
import { getProfile } from '../../redux/auth/getProfile/asyncActions'
import { fetchItems } from '../../redux/cards/asyncActions'
import { useAppDispatch, useAppSelector  } from '../../redux/store'
import './Home.scss'

const Home: React.FC = () => {
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
    <main>   
    <Title/>
    <CreateNft/>
    <LiveAuctions/>
    </main>
  )
}

export default Home