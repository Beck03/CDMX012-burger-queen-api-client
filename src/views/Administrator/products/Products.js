import { useState, useLayoutEffect } from 'react';
import '../../Administrator/addPartners/AddPartnes.css'
import icoBurgerQueen from '../../../components/images/icoBurgerQueen.svg';
import plus from '../../../components/images/Plus.svg';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  useLayoutEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data)
      })
  }, [])

  return (
    <section className='addPartners'>
      <div className='header'>
        <img
          src={icoBurgerQueen}
          alt='Burger Queen'
          id='icoBurgerQueen'
          onClick={() => navigate('/')}
        />
        <button
          id='products'
          onClick={() => navigate('/AddPartners')}
        >Asociados
        </button>
      </div>
      <h2>Productos</h2>
      {/* <section id='listaDeAsociados'>
        <div id='tarjetaCategory'>
          <div><h5>Item</h5></div>
          <div><h5>Precio</h5></div>
        </div>
        {products && products.map((product) => (
          <div id='tarjetaAso' key={product.id}>
            <div id='listName'><h5>{product.nombre}</h5></div>
            <div id='listJob'>
              <h5>{product.precio}</h5>
            </div>
          </div>
        ))}
      </section> */}
      <div className='table-responsive'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Itemn</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>{product.categoría}</td>
                <td>Borrar</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <button id='plusPartners'>
        <img
          src={plus}
          alt='Mas'
          id='Plus'
        />
      </button>
    </section>
  );
}

export default Products;