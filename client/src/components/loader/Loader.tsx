import React from 'react'
import loaderImg from '../../assets/loader/loader.svg'
import './loader.scss'

const Loader:React.FC = () => {
  return (
    <>
      <img src={loaderImg} alt="loader" className='loader'/>
    </>
  )
}

export default Loader