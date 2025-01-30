import React from 'react'
import Style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={Style.loadingContainer}>
      <div className={Style.spinner}></div>
      <p>Loading images...</p>
    </div>
  )
}

export default Loading
