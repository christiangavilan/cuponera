import { useContext } from 'react'
import { ContadorContext } from '../context/ContadorContext'
import '../styles/CardContadorNavidad.css'
import { NavLink } from 'react-router-dom'

const CardContadorNavidad = ({contador}) => {
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
            <div data-swapy-item={contador.id} className='ContadorNavidad_contenedorPadre'>
                
                <NavLink to={contador.url} className="urlContador">
                  <div style={contador.precioCheck ?  undefined : {alignItems: 'center'} } className='ContadorNavidad_contenedorCupon'>
                    <img src={imagenAdorno} alt="Adorno navidad"  className="ContadorNavidad_contenedorAdornoUno"></img>
                    {/* IMAGEN */}
                    <div className='ContadorNavidad_contenedorImage'>
                      <img className='Contador_img ContadorNavidad_img' src={contador.image} alt= {`Contador Falabella ${contador.textoAlt}`} title={`Contador Falabella ${contador.textoAlt}`} />
                    </div>
      
                    {/* INFO */}
                    <div className='ContadorNavidad_info'>


                      {/* DESCUENTO */}
                      {contador.dctoCheck && (
                          <div className="ContadorNavidad_contenedorAdorno">
                              <div className="ContadorNavidad_adornoDcto_line"></div>
                              <img src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt4999a9a8406f04a0/691414286f789362de7cfcb4/adornoDcto.png" alt=""/>
                              <div className="ContadorNavidad_adornoDcto_line"></div>
                          </div>
                      )}


                      <div className='ContadorNavidad_innerInfo'>
                        <div className='ContadorNavidad_contendorCupon'>
                          <p className='Contador_texto ContadorNavidad_texto'>{contador.marca}</p>
                          <p className='Contador_descripcion ContadorNavidad_descripcion'>{contador.descripcion} </p>
                          <p className='Contador_subDescripcion ContadorNavidad_subDescripcion'>{contador.subllamado}</p>
                        </div>
      
                        <div className='ContadorNavidad_contendorllamado'>


                        {/* PRECIO OU */}
                        {contador.precioCheck && (
                          <div className="contenedorRelativoPrecio contenedorRelativoPrecio">
                            
                              {contador.ou && (
                                <div className="ContadorNavidad_imageOU">
                                    <div className="ContadorNavidad_imageOUline"></div>
                                    <img className="imgOU_precio" src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt3a5f617676b151f4/OU-horizontal-2025.png"
                                        alt=""/>
                                    <div className="ContadorNavidad_imageOUline"></div>
                                </div>
                              )}
                              <div className="ContadorNavidad_contenedorNumerosPrecio">
                                <p className='Contador_precioOferta ContadorNavidad_precioOferta Contador_precioOU '>${contador.PrecioOferta}</p>
                                <p className='Contador_TextoprecioOferta ContadorNavidad_TextoprecioOferta'>
                                  {contador.ou ? 
                                  'Oportunidad única' : 'Todo medio de pago'
                                  }
                                  </p>
                                <p className='Contador_precioOferta ContadorNavidad_precioOferta'>${contador.PrecioTMP}</p>
                                <p className='Contador_TextoprecioOferta ContadorNavidad_TextoprecioOferta'>
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
                            <div className="ContadorNavidad_contenedorNumerosPrecio">
                                {contador.ouPrecioUnico && (
                                  <img className='imgOU_precio' src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt3a5f617676b151f4/OU-horizontal-2025.png" alt="" />
                                )}
                              <div className='Contador_contenedor2xPrecio ContadorNavidad_contenedor2xPrecio'>
                                {contador.dosPor && (
                                  <p className='ContadorNavidad_texto2x'>2x</p>
                                )}
                                <p className='Contador_precio2x ContadorNavidad_precio2x Contador_precioOU2x'>${contador.Precio2x}</p>
                              </div>
                              <p className='Contador_TextoprecioOferta ContadorNavidad_TextoprecioOferta'>Productos seleccionados</p>
                            </div>
                          </div>
                        )}


                          


                          {/* DESCUENTO */}
                          {contador.dctoCheck && (
                          <div>
                              <div className="contenedorRelativo">
                                <div className="ContadorNavidad_contenedorNumeros">
                                  {contador.oudcto && (
                                    <img className='imgOU' src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt83e23fb7eb3e2175/OU-vertical-2025.png" alt="" />
                                  )}
                                  <p className='Contador_porcentaje ContadorNavidad_porcentaje'>{contador.dcto}</p>
                                  <div className='ContadorNavidad_innerContenedor'>
                                    <p className='ContadorNavidad_textPorcentaje'>%</p>
                                    <p className='ContadorNavidad_adicional'>dcto</p> 
                                  </div>
                                </div>
                              </div>
                              <p className='ContadorNavidad_pSeleccionados'>Productos seleccionados</p>
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

export default CardContadorNavidad
