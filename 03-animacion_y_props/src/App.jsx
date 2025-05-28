import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import './App.css'

function App() {
 
  return (
    <>
      <Header title="Curso de React 2025" show={false}>
        <section>
          <p>Este es el section</p>
          <p>Este es un parrafo</p>
        </section>
      </Header>
      <Section />
      <Footer />
    </> 
  )
}

export default App
