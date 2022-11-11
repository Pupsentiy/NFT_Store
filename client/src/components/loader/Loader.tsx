import React from 'react'
import styled from 'styled-components'

import loaderImg from '../../assets/loader/loader.svg'

export const LoaderEl = styled.img`
position: absolute;
top: 40%;
left: auto;
`

const Loader:React.FC = () => {
  return (
      <LoaderEl src={loaderImg} alt="loader"/>
  )
}

export default Loader