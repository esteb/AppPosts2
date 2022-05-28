import React, {useState } from 'react'

export const PostForm = (props) => {

  const [nuevoPostNombre, setNuevoPostNombre] = useState('');
  const actualizaPostNombre = e => setNuevoPostNombre(e.target.value);

  const [nuevoPostDescripcion, setNuevoPostDescripcion] = useState('');
  const actualizaPostDescripcion = e => setNuevoPostDescripcion(e.target.value);

  const crearNuevoPost = async() => {
    const post = { nombre: nuevoPostNombre, descripcion: nuevoPostDescripcion}
    
    

    const resp = await fetch('http://localhost:4000/posts', {
      method: 'POST',
      body: JSON.stringify( post ), 
      headers: { "Content-Type": "application/json" } 
    });

    const data = await resp.json();
    console.log( data );
    props.callback( data );

    setNuevoPostNombre('');
    setNuevoPostDescripcion('');
  }

  return (
    <div className="container-fluid">
      <div className="row" id="map_section">
          
          <div className="col-4">
              <input 
                type="text"
                placeholder='Nombre'
                className="form-control"
                value = { nuevoPostNombre }
                onChange={ actualizaPostNombre }
              />
          </div>

          <div className="col-4">
            <input 
              type="text"
              placeholder='Descripción'
              className="form-control"
              value = { nuevoPostDescripcion }
              onChange={ actualizaPostDescripcion }
            />
          </div>

          <div className="col-3"></div>

          <div className="col-1">
            <button 
              className="btn btn-primary mt-1"
              onClick={ crearNuevoPost }
            >
              Crear
            </button>
          </div>
      </div>
    </div>
  )
}
