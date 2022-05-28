import React from 'react'

export const PostRow = (props) => {

  const eliminaP = async ( id ) => {

    console.log(`elimina post id: ${ id }`);

    const resp = await fetch(`http://localhost:4000/posts/${ id }`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" } 
    });

    console.log(resp);

    props.callback( id );
  }
  

  return (
    <tr key={props.post.id}>
      <td>{props.post.nombre}</td>
      <td>{props.post.descripcion}</td>
      <td>
          <button key={props.post.id} 
            className='btn btn-danger mt-1'
            onClick={ () => eliminaP( props.post.id ) }
          >
            Eliminar
          </button>
      </td>
    </tr>
  )
}
