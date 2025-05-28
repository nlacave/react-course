import { useState } from "react"
import React from 'react'

const Items = ({tarea, realizada}) => {
    return (
        <li className="tarea">{tarea} {realizada ? "✅" : "❌"}</li>
        /*<li>{tarea} {realizada && "💯"}</li>*/
    )
}

export const ListadoApp = () => {
  let listadoTareas = [
    {tarea: "Trabajar", realizada: true},
    {tarea: "Estudiar programación", realizada: false},
    {tarea: "Estudiar inglés", realizada: false},
    {tarea: "Editar video", realizada: true},
  ]

  const [tareas, setTareas] = useState(listadoTareas)


  const createTask = () => {
    setTareas([...tareas, {tarea: 'nuevaTarea', realizada: true}])
  }

  return (
    <>
        <inputTarea></inputTarea>
        <ol>
          {tareas.map((item, index) => <Items key={index} tarea={item.tarea} realizada={item.realizada}></Items>)}
        </ol>
        <button onClick={createTask}>Agregar tarea</button>
    </>
    
  )
}