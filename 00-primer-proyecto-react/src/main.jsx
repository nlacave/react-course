import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
//import { PrimerComponente } from './primerComponente.jsx'
//import { ContadorApp } from './ContadorApp.jsx'
import { ListadoApp } from './components/ListadoApp.jsx'

import '../styles/botonApp.css';
import { BotonApp } from './components/BotonApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<PrimerComponente nombre='Juan' apellido='Perez'/>
    <ContadorApp value={0}/>*/}
    <ListadoApp />
    {/*<BotonApp />*/}
  </StrictMode>
)
