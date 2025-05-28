import userImage from '../../assets/hombre.png';
import '../Section/Section.css';

const usuarios = [
  {
    id: 1,
    name: 'Pablo Pérez',
    description: 'Traductor',
    image: userImage,
  },
  {
    id: 2,
    name: 'Leonel Martinez',
    description: 'Programador',
    image: userImage,
  }
]
export const Section = () => {
  return (
    <div className='userList'>
      <h3>Usuarios en Búsqueda Laboral</h3>
      <section className='users'>
        {
          usuarios.map((usuario) => { 
          return (
            <div key={usuario.id}>
              <img src={usuario.image} alt={usuario.name}></img>
              <h3>{usuario.name}</h3>
              <p>{usuario.description}</p>
            </div>
            );
          })
        }
      </section>
    </div>
  );
};
