import Item from './componentes/item';
import Contenedor from './componentes/contenedor';
import Padre from './componentes/padre';

import './App.css';

function App() {

  const data = [
    {
      id: 1,
      imagen: "img1.png",
      titulo: "Hoddie",
      descripcion: "A green hoddie",
      precio: "35"
    },
    {
      id: 2,
      imagen: "img2.jpeg",
      titulo: "BackPack",
      descripcion: "A backpack green",
      precio: "234"
    },
    {
      id: 3,
      imagen: "img3.jpeg",
      titulo: "Wallet",
      descripcion: "A rainbow wallet :D",
      precio: "56"
    }
  ]


  return (
    <Padre  >
      <h1>E-Commerce in React and SnipCart</h1>

    <Contenedor>
    {data.map(dat =>(
      <Item 
      key={dat.id}
      imagen={dat.imagen}
      titulo = {dat.titulo}
      descripcion={dat.descripcion}
      precio={dat.precio}
      />
    ))}
    </Contenedor>
    
    </Padre >
      

  );
}

export default App;
