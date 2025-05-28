import React, {useState} from 'react'
import '../../styles/botonApp.css'

const Boton = () => {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>Este es el boton N°{contador}</button>
  )
}

export const BotonApp = () => {
  return (
    <>
      {
      Array.from({ length: 10}).map((_, index) => (
        <Boton key={index} />
      ))
    }
    </>
  )
}

