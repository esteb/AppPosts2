import React , { useState, useEffect } from "react"
import { PostBanner } from "./components/PostBanner.js";
import { PostFilter } from "./components/PostFilter.js";
import { PostForm } from "./components/PostForm.js";
import { PostRow } from "./components/PostRow.js";

export default function App(){

  // const [postItems, setPostItems] = useState([
  //   { nombre: 'post 1 react', descripcion: 'descrip 1 react' },
  //   { nombre: 'post 2 react', descripcion: 'descrip 2 react' }
  // ]);

  const [postItems, setPostItems] = useState([]);


  const cargaPost = async () => {

    const resp = await fetch('http://localhost:4000/posts', {
      method: 'GET',
      headers: { "Content-Type": "application/json" } 
    });

    const data = await resp.json();
    console.log( data );

    setPostItems( data );
  }

  useEffect( () => {
    cargaPost()
  },[]);

  const eliminaPost = ( id ) => {

    setPostItems( postItems.filter( post => post.id !== id ) );

    // setPostItems( data );
  }

  const postTableRows = () => {
    return postItems.map( post => (
      <PostRow post={ post }  key={post.nombre} callback={ eliminaPost }/>
    ))
  }

  const crearNuevoPost = post => {
    setPostItems([...postItems, { 
        nombre: post.nombre,
        descripcion: post.descripcion, 
        id: post.id 
      }]);

    // if( !postItems.find( p => p.nombre === post.nombre )){
    //   setPostItems([...postItems, { nombre: post.nombre, descripcion: post.descripcion, id: post.id }])
    // }
  }

  const buscarPost = ( nombre ) => {
    console.log(`busca post app nombre: ${ nombre }`);

    const filtro = postItems.filter( post => post.nombre === nombre);
    
    // console.log(filtro);

    if( filtro.length !== 0 ) setPostItems( filtro );
  }

  return(
    <div>
      <PostBanner/>
      <PostFilter callback ={buscarPost}/>
      <br/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {postTableRows()}
        </tbody>
      </table>
      <br/>
      <PostForm callback ={crearNuevoPost} />
    </div>
  )
}