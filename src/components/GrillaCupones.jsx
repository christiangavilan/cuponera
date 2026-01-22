import {useContext } from 'react'
import Cupon from './Cupon'
import CuponNavidad from './CuponNavidad'
import CuponNavidadBlack from './CuponNavidadBlack'
import '../styles/grilla.css'
import { CuponContext } from '../context/CuponContext'
import { SwapyContext } from '../context/SwapyContext'

const Grilla = () => {
  const {datos, agregar} = useContext(CuponContext)
  const {container} = useContext(SwapyContext)
  
  


  return (
    <div ref={container} className='Cupon-contenedorGrilla'>
      {datos.map(cupon => (
        // <Cupon key={cupon.id} cupon={cupon} />
        <CuponNavidad key={cupon.id} cupon={cupon} />
        // <CuponNavidadBlack key={cupon.id} cupon={cupon} />
      ))}
        
    </div>
  )
}

export default Grilla