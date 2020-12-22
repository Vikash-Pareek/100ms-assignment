import React from 'react'
import loader from '../../img/476.gif'

const LoadingIcon = () => {
  return (
    <img
      src={loader}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default LoadingIcon
