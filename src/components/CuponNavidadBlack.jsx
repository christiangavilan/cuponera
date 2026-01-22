import { useContext, useState } from 'react'
import { CuponContext } from '../context/CuponContext'
import { NavLink } from 'react-router-dom'

const CuponNavidadBlack = ({cupon}) => {

  const{editarCupon, eliminarCupon, descargarCuponComoImagen} = useContext(CuponContext)
  const [verLegal, setVerLegal] = useState(false)


  return (
    <>      
      <div data-swapy-slot={cupon.id} data-cupon="true" key={cupon.id}>
        <div data-swapy-item={cupon.id} className='Cupon_contenedorPadre' style={{zIndex: 2}}>
            <div className='Cupon_contenedorCupon'>
              

              {/* DECORACION */}
              <div className="cupon_ornaments">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.003" height="250.441" viewBox="0 0 36.003 461.441">
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectángulo_24869" data-name="Rectángulo 24869" width="36.004" height="247.441" fill="none"/>
                    </clipPath>
                  </defs>
                  <g id="Grupo_77033" data-name="Grupo 77033">
                    <g id="Grupo_75866" data-name="Grupo 75866" clip-path="url(#clip-path)">
                      <path id="Trazado_121182" data-name="Trazado 121182" d="M36,61.313a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 9.548)" fill="#00f400"/>
                      <path id="Trazado_121183" data-name="Trazado 121183" d="M36,104.624a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 19.096)" fill="#00f400"/>
                      <path id="Trazado_121184" data-name="Trazado 121184" d="M36,147.936a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 28.645)" fill="#00f400"/>
                      <path id="Trazado_121185" data-name="Trazado 121185" d="M36,191.247a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 38.193)" fill="#00f400"/>
                      <g id="Grupo_76599" data-name="Grupo 76599">
                        <path id="Trazado_121181" data-name="Trazado 121181" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#00f400"/>
                        <path id="Trazado_121186" data-name="Trazado 121186" d="M25.958,17.178,30.534,12.6H21.675V3.739L17.1,8.315,12.524,3.739V12.6H3.8l4.576,4.575L3.8,21.753h8.728v8.863L17.1,26.041l4.576,4.575V21.753h8.859Z" transform="translate(0.836 0.824)" fill="#fff"/>
                      </g>
                      <path id="Trazado_121187" data-name="Trazado 121187" d="M25.958,103.8l4.576-4.575H21.675V90.362L17.1,94.937l-4.576-4.575v8.863H3.8L8.372,103.8,3.8,108.375h8.728v8.863l4.576-4.576,4.576,4.576v-8.863h8.859Z" transform="translate(0.837 19.921)" fill="#fff"/>
                      <path id="Trazado_121188" data-name="Trazado 121188" d="M27.118,191.812l5.049-5.049H22.391v-9.779l-5.049,5.049-5.049-5.049v9.779H2.663l5.049,5.049-5.049,5.049h9.629v9.78l5.049-5.049,5.049,5.049v-9.78h9.776Z" transform="translate(0.587 39.017)" fill="#fff"/>
                      <path id="Trazado_121189" data-name="Trazado 121189" d="M22.832,73.1l-5.687-9.65-5.485,9.7L6.877,69.774l7.4-8.32-10.8-2.128,1.753-5.6,10.12,4.313L14.039,47.045l5.977-.111L18.9,58l10.236-4.723L31,58.814l-11,2.5,7.643,8.23Z" transform="translate(0.765 10.347)" fill="#265c44"/>
                      <path id="Trazado_121190" data-name="Trazado 121190" d="M22.832,160.107l-5.687-9.65-5.485,9.7-4.783-3.373,7.4-8.32-10.8-2.128,1.753-5.6,10.12,4.313-1.306-10.991,5.977-.111L18.9,145.011l10.236-4.723L31,145.824l-11,2.5,7.643,8.23Z" transform="translate(0.765 29.529)" fill="#265c44"/>
                    </g>
                  </g>
                  <g id="Grupo_77034" data-name="Grupo 77034" transform="translate(0 214)">
                    <g id="Grupo_75866-2" data-name="Grupo 75866" clip-path="url(#clip-path)">
                      <path id="Trazado_121182-2" data-name="Trazado 121182" d="M36,61.313a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 9.548)" fill="#00f400"/>
                      <path id="Trazado_121183-2" data-name="Trazado 121183" d="M36,104.624a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 19.096)" fill="#00f400"/>
                      <path id="Trazado_121184-2" data-name="Trazado 121184" d="M36,147.936a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 28.645)" fill="#00f400"/>
                      <path id="Trazado_121185-2" data-name="Trazado 121185" d="M36,191.247a18,18,0,1,1-18-18,18,18,0,0,1,18,18" transform="translate(0 38.193)" fill="#00f400"/>
                      <g id="Grupo_76599-2" data-name="Grupo 76599">
                        <path id="Trazado_121181-2" data-name="Trazado 121181" d="M36,18A18,18,0,1,1,18,0,18,18,0,0,1,36,18" fill="#00f400"/>
                        <path id="Trazado_121186-2" data-name="Trazado 121186" d="M25.958,17.178,30.534,12.6H21.675V3.739L17.1,8.315,12.524,3.739V12.6H3.8l4.576,4.575L3.8,21.753h8.728v8.863L17.1,26.041l4.576,4.575V21.753h8.859Z" transform="translate(0.836 0.824)" fill="#fff"/>
                      </g>
                      <path id="Trazado_121187-2" data-name="Trazado 121187" d="M25.958,103.8l4.576-4.575H21.675V90.362L17.1,94.937l-4.576-4.575v8.863H3.8L8.372,103.8,3.8,108.375h8.728v8.863l4.576-4.576,4.576,4.576v-8.863h8.859Z" transform="translate(0.837 19.921)" fill="#fff"/>
                      <path id="Trazado_121188-2" data-name="Trazado 121188" d="M27.118,191.812l5.049-5.049H22.391v-9.779l-5.049,5.049-5.049-5.049v9.779H2.663l5.049,5.049-5.049,5.049h9.629v9.78l5.049-5.049,5.049,5.049v-9.78h9.776Z" transform="translate(0.587 39.017)" fill="#fff"/>
                      <path id="Trazado_121189-2" data-name="Trazado 121189" d="M22.832,73.1l-5.687-9.65-5.485,9.7L6.877,69.774l7.4-8.32-10.8-2.128,1.753-5.6,10.12,4.313L14.039,47.045l5.977-.111L18.9,58l10.236-4.723L31,58.814l-11,2.5,7.643,8.23Z" transform="translate(0.765 10.347)" fill="#265c44"/>
                      <path id="Trazado_121190-2" data-name="Trazado 121190" d="M22.832,160.107l-5.687-9.65-5.485,9.7-4.783-3.373,7.4-8.32-10.8-2.128,1.753-5.6,10.12,4.313-1.306-10.991,5.977-.111L18.9,145.011l10.236-4.723L31,145.824l-11,2.5,7.643,8.23Z" transform="translate(0.765 29.529)" fill="#265c44"/>
                    </g>
                  </g>
                </svg>
              </div>


              {/* IMAGEN */}
              <div className='Cupon_contenedorImage'>
                <img className='Cupon_img' src={cupon.image} alt= {`Cupón Falabella ${cupon.textoAlt}`} title={`Cupón Falabella ${cupon.textoAlt}`} />
              </div>

              {/* DIVISOR */}
              <div class="Cupon_divisor"><svg id="Grupo_77033" data-name="Grupo 77033" xmlns="http://www.w3.org/2000/svg" width="53.27" height="240.27" viewBox="0 0 53.27 53.27">
                  <path id="Trazado_121219" data-name="Trazado 121219" d="M605.687,26.636A26.635,26.635,0,1,1,579.052,0a26.635,26.635,0,0,1,26.635,26.635" transform="translate(-552.417 -0.001)" fill="#00f400"/>
                  <path id="Trazado_121220" data-name="Trazado 121220" d="M589.889,46.244,582.571,34.27,575.9,46.531l-6.059-4.13,9.1-10.57-13.574-2.449,2.083-7.053,12.762,5.2-1.856-13.74,7.486-.259-1.176,13.885,12.726-6.12,2.447,6.9-13.728,3.355L595.845,41.7Z" transform="translate(-555.666 -3.395)" fill="#f93d61"/></svg>
              </div>

              {/* INFO */}
              <div className='Cupon_info'>
                <div className='Cupon_innerInfo'>
                  <div className='Cupon_contendorCupon'>
                    <p className='Cupon_texto'>usando el cupon</p>
                    <div className='Cupon_nombreCupon'>
                      <p className='Cupon_cupon'>{cupon.cupon}</p>
                      <img className='Cupon_iconCopiar copiarCupon' src="https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt6d1556bf501d9da7/copy-regular-full.png" alt="Tarjeta Oportunidad unica falabella" />
                      <div className="Cupon_mensajeCopiado">Copiar cupon</div>
                    </div>
                  </div>

                  <a href={cupon.url} className='Cupon_contendorllamado'>
                  
                    <div className='Cupon_contenedorDcto'>
                      <p className='Cupon_porcentaje'>{cupon.dcto}</p>
                      <div className='Cupon_innerContenedor'>
                        <p className='Cupon_textPorcentaje'>% dcto</p>
                        <p className='Cupon_adicional'>adicional</p> 
                      </div>
                    </div>
                    <p className='Cupon_llamado' data-field="llamado" >{cupon.llamado}</p>
                    <p className='Cupon_subllamado'>{cupon.subllamado}</p>
                    <p className='Cupon_pSeleccionados'>Productos seleccionados</p>
                    <p className='Cupon_verProductos'>Ver productos </p>
                  
                  </a>                 
                </div>

                {/* <div className='Cupon_contenedorLegal'>
                  <p className='Cupon_textoLegal'>Válido hasta el {cupon.dia}/{cupon.mes}/2025 a las {cupon.hora}hras. </p>
                </div> */}

              </div>
              
            </div>
            
            <div className="Cupon_contenedorTC">
              <div className='Cupon_VerTC' onClick={()=>setVerLegal(v=>!v)}>
                  Ver términos y condiciones
              </div>
              <div className={`panel ${verLegal ? 'panel--open' : ''}`}>{cupon.legal}</div>
            </div>
          
          {/* Editor de cupon */}
          <div className='Cupon_editorCupon'>
            <p onClick={()=>editarCupon(cupon.id)} className='Cupon_btnEditor'>
              <i className="fa-solid fa-pen-to-square"></i>
            </p>
            <p onClick={()=>eliminarCupon(cupon.id)} className='Cupon_btnEditor'>
              <i className="fa-solid fa-trash-can"></i>
            </p>
                  {/* <p onClick={() => descargarCuponComoImagen(cupon.id)}>📷 IMG</p> */}

          </div>
        </div>  
      </div>

      

      
    
    





    
    </>
  )
}

export default CuponNavidadBlack
