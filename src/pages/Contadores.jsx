import React from 'react'
import FormularioContadores from '../components/FormularioContadores'
import HomeContadores from '../components/HomeContadores'
import style from '../styles/MainContainer.module.css'

const Contadores = () => {
  return (
    <>
    <div className={style.mainContainer}>
        <FormularioContadores/>
        <HomeContadores/>
    </div>
    </>
  )
}

export default Contadores
