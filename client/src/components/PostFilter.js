import React , {useState } from 'react'

export const PostFilter = (props) => {

  const [nombrePost, setNombrePost] = useState('');
  const nombreFiltro = e => setNombrePost(e.target.value);

  const buscar = () => {
    props.callback( nombrePost );
  }



  return (

    <div className="container-fluid">
      <div className="row" id="map_section">
          
          <div className="col-4">
              <input 
                  type="text"
                  className="form-control"
                  placeholder='Filtro de Nombre'
                  value = { nombrePost }
                  onChange={ nombreFiltro }
              />
          </div>
          <div className="col-7"></div>
          <div className="col-1">
              <button 
                  className='btn btn-primary mt-1'
                  onClick={ () => buscar( ) }
                >
                  Buscar
                </button>
          </div>
      </div>
    </div>
    
  )
}
