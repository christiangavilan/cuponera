import { useContext } from 'react'
import { ContadorContext } from '../context/ContadorContext'
import '../styles/CardContadorNavidadBlack.css'
import { NavLink } from 'react-router-dom'

const CardContadorNavidadBlack = ({contador}) => {
  const{eliminarContador, editarContador} = useContext(ContadorContext)

  // Define las dos imágenes que quieres alternar
  const imagenes = [
    "https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/bltebfb50350a2be53f/69141428f60b0fd96bbc313c/adornoDcto2.png",
    "https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blte84ae1737d0f90dd/69141841a6e2a9c607b7e61c/adornoDcto3.png"
  ];

  // Usa el ID del contador para alternar
  const imagenAdorno = imagenes[parseInt(contador.id) % imagenes.length];

  return (

    <div data-swapy-slot={contador.id} data-contador="true" key={contador.id}>
            <div data-swapy-item={contador.id} className='ContadorNavidadBlack_contenedorPadre'>
                
                <NavLink to={contador.url} className="urlContador">
                  <div style={contador.precioCheck ?  undefined : {alignItems: 'center'} } className='ContadorNavidadBlack_contenedorCupon'>
                    <img src={imagenAdorno} alt="Adorno navidad"  className="ContadorNavidadBlack_contenedorAdornoUno"></img>
                    {/* IMAGEN */}
                    <div className='ContadorNavidadBlack_contenedorImage'>
                      <img className='Contador_img ContadorNavidadBlack_img' src={contador.image} alt= {`Contador Falabella ${contador.textoAlt}`} title={`Contador Falabella ${contador.textoAlt}`} />
                    </div>
      
                    {/* INFO */}
                    <div className='ContadorNavidadBlack_info'>


                      {/* DESCUENTO */}
                      {contador.dctoCheck && (
                          <div className="ContadorNavidadBlack_contenedorAdorno">
                              <div className="ContadorNavidadBlack_adornoDcto_line"></div>
                              <img src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt4999a9a8406f04a0/691414286f789362de7cfcb4/adornoDcto.png" alt=""/>
                              <div className="ContadorNavidadBlack_adornoDcto_line"></div>
                          </div>
                      )}


                      <div className='ContadorNavidadBlack_innerInfo'>
                        <div className='ContadorNavidadBlack_contendorCupon'>
                          <p className='Contador_texto ContadorNavidadBlack_texto'>{contador.marca}</p>
                          <p className='Contador_descripcion ContadorNavidadBlack_descripcion'>{contador.descripcion} </p>
                          <p className='Contador_subDescripcion ContadorNavidadBlack_subDescripcion'>{contador.subllamado}</p>
                        </div>
      
                        <div className='ContadorNavidadBlack_contendorllamado'>


                        {/* PRECIO OU */}
                        {contador.precioCheck && (
                          <div className="contenedorRelativoPrecio contenedorRelativoPrecio">
                            
                              {contador.ou && (
                                <div className="ContadorNavidadBlack_imageOU">
                                    <div className="ContadorNavidadBlack_imageOUline"></div>
                                    <img className="imgOU_precio" src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt3a5f617676b151f4/OU-horizontal-2025.png"
                                        alt=""/>
                                    <div className="ContadorNavidadBlack_imageOUline"></div>
                                </div>
                              )}
                              <div className="ContadorNavidadBlack_contenedorNumerosPrecio">
                                <p className='Contador_precioOferta ContadorNavidadBlack_precioOferta Contador_precioOU '>${contador.PrecioOferta}</p>
                                <p className='Contador_TextoprecioOferta ContadorNavidadBlack_TextoprecioOferta'>
                                  {contador.ou ? 
                                  'Oportunidad única' : 'Todo medio de pago'
                                  }
                                  </p>
                                <p className='Contador_precioOferta ContadorNavidadBlack_precioOferta'>${contador.PrecioTMP}</p>
                                <p className='Contador_TextoprecioOferta ContadorNavidadBlack_TextoprecioOferta'>
                                  {contador.ou ? 
                                  `P. Normal:${contador.PrecioNormal}` : 'Precio normal'
                                  }
                                  
                                </p>
                            </div>
                          </div>
                        )}

                        {/* <div class="contenedorRelativoPrecio">
                            <div class="Contador_imageOU">
                                <div class="Contador_imageOUline"></div>
                                <img class="imgOU_precio"
                                    src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt3a5f617676b151f4/OU-horizontal-2025.png"
                                    alt="" style="">
                                <div class="Contador_imageOUline"></div>
                            </div>
                            <div class="Contador_contenedorNumerosPrecio">
                                <p class="Contador_precioOferta Contador_precioOU ">$469.990</p>
                                <p class="Contador_TextoprecioOferta">Oportunidad única</p>
                                <p class="Contador_precioOferta">$499.990</p>
                                <p class="Contador_TextoprecioOferta">Todo medio de pago</p>
                                <p class="Contador_TextoprecioOferta">P. Normal:649.990</p>
                            </div>
                        </div> */}


                        {/* PRECIO UNICO */}
                        {contador.precioUnicoCheck && (
                          <div className="contenedorRelativoPrecio">
                            <div className="ContadorNavidadBlack_contenedorNumerosPrecio">
                                {contador.ouPrecioUnico && (
                                  <img className='imgOU_precio' src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt3a5f617676b151f4/OU-horizontal-2025.png" alt="" />
                                )}
                              <div className='Contador_contenedor2xPrecio ContadorNavidadBlack_contenedor2xPrecio'>
                                {contador.dosPor && (
                                  <p className='ContadorNavidadBlack_texto2x'>2x</p>
                                )}
                                <p className='Contador_precio2x ContadorNavidadBlack_precio2x Contador_precioOU2x'>${contador.Precio2x}</p>
                              </div>
                              <p className='Contador_TextoprecioOferta ContadorNavidadBlack_TextoprecioOferta'>Productos seleccionados</p>
                            </div>
                          </div>
                        )}


                          


                          {/* DESCUENTO */}
                          {contador.dctoCheck && (
                          <div>
                              <div className="contenedorRelativo">
                                <div className="ContadorNavidadBlack_contenedorNumeros">
                                  {contador.oudcto && (
                                    <img className='imgOU' src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt83e23fb7eb3e2175/OU-vertical-2025.png" alt="" />
                                  )}
                                  <p className='Contador_porcentaje ContadorNavidadBlack_porcentaje'>{contador.dcto}</p>
                                  <div className='ContadorNavidadBlack_innerContenedor'>
                                    <p className='ContadorNavidadBlack_textPorcentaje'>%</p>
                                    <p className='ContadorNavidadBlack_adicional'>dcto</p> 
                                  </div>
                                </div>
                              </div>
                              <p className='ContadorNavidadBlack_pSeleccionados'>Productos seleccionados</p>
                          </div>
                          )}

                        </div>
                      </div>
                    </div>


                  </div>
                  </NavLink>
                
              
              {/* Editor de cupon */}
              <div className='Contador_editorCupon'>
                <p onClick={()=>editarContador(contador.id)} className='Contador_btnEditor'>
                  <i className="fa-solid fa-pen-to-square"></i>
                </p>
                <p onClick={()=>eliminarContador(contador.id)} className='Contador_btnEditor'>
                  <i className="fa-solid fa-trash-can"></i>
                </p>
              </div>
            </div>  
          </div>
  )
}

export default CardContadorNavidadBlack
