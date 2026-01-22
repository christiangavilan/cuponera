import React from 'react'
import FormularioCupones from '../components/FormularioCupones'
import HomeCupones from '../components/HomeCupones'
import style from '../styles/MainContainer.module.css'

const Cuponera = () => {
  return (
    <>
    <div className={style.mainContainer}>
      <FormularioCupones/>
      <HomeCupones/>
    </div>
    </>
  )
}

export default Cuponera
