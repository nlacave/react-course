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
    name: 'Belen Martinez',
    description: 'Paseadora de perros',
    image: userImage,
  },
   {
    id: 3,
    name: 'Esteban Paredes',
    description: 'Data Analyst',
    image: userImage,
  },
  {
    id: 4,
    name: 'Nicolas Mingrino',
    description: 'Frontend Developer',
    image: userImage,
  },
  {
    id: 5,
    name: 'Nancy Randazzo',
    description: 'Maestra jardinera',
    image: userImage,
  }
]
export const Section = () => {
  return (
    <div className='userList'>
      <h3>Usuarios en Búsqueda Laboral</h3>
      <section className='users'>
        {
          usuarios.map(({id, name, description, image}) => { 
          return (
            <div key={id}>
              <img src={image} alt={name}></img>
              <h3>{name}</h3>
              <p>{description}</p>
              <button onClick={()=> ContactarUsuarios(name)}>Contactar</button>
            </div>
            );
          })
        }
      </section>
    </div>
  );
};

const ContactarUsuarios = (usuario) => {
  {console.log("Contactando a " + usuario)};
}