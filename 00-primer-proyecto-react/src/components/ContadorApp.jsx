import React, {useState} from 'react'


export const ContadorApp = () => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
}

  return (
    <>
        <h1>Contador: {contador}</h1>
        <button onClick={handleClick}>Sumar</button>
    </>    
  )
}
