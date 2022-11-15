import React from 'react'

import loaderImg from '../../assets/loader/loader.svg'

import { LoaderEl } from './Loader.styled'

const Loader:React.FC = () => {
  return (
      <LoaderEl src={loaderImg} alt="loader"/>
  )
}

export default Loader