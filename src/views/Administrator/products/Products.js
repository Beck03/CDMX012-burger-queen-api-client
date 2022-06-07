import { useState, useLayoutEffect } from 'react';
import plus from '../../../Components/images/Plus.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../products/Products.css';
import Header from './Header'
import { Button } from 'reactstrap';
import ModalBox from './ModalBox';

//por alguna razón que no entiendo, Input de Bootstrap no funciona con useForm
//Hacer que al editar elemento se vuelva a cargar

const Products = () => {

  const [products, setProducts] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalStatus2, setModalStatus2] = useState(false);
  const [type, setType] = useState('type');
  const [category, setCategory] = useState('category');
  const [modalInfo, setModalInfo] = useState({});

  const formType = (e) => setType(e.target)
  const formCategory = (e) => setCategory(e.target)

  const toggle = () => {
    setModalStatus(!modalStatus);
  }

  const toggle2 = () => {
    setModalStatus2(!modalStatus2);
  }

  useLayoutEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data);
        console.log('holi')
      });
  }, [])

  const createProduct = (data) => {
    fetch('http://localhost:3001/productos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response);
        setProducts(products.concat(response));
      });
  }

  const editProduct = (data) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:3001/productos/' + modalInfo.id, requestOptions)
      .then(res => res.json())
      .then(data => {
        const newData = [...products]; //esto permite que se renderice al llamar a la funcion
        const obtained = data;
        newData.map(function (info) {
          if (obtained.id === info.id) {
            info.name = obtained.name;
            info.price = obtained.price;
            info.type = obtained.type;
            info.category = obtained.category;
          }
          return info;
        })
        console.log('Success:', data);
        setProducts(newData);
      })
  }


  const onSubmit = (data) => {
    createProduct(data);
    toggle();
  }

  const loadData = (data) => {
    toggle2();
    setModalInfo(data);
  }

  const editData = (data) => {
    editProduct(data);
    toggle2();
  }

  return (
    <article className='products'>
      <Header />
      <section className='contents'>
        <h2>Productos</h2>

        <div className='table-responsive product-list'>
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
                  <td onClick={() => loadData(product)}>{product.name}</td>
                  {/* <td><img alt='bla'src={product.img}/></td> */}
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td onClick={() => alert('borrar')}>Borrar</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button id='plusPartners' onClick={toggle} >
          <img
            src={plus}
            alt='Mas'
            id='Plus'
          />
        </Button>

      </section>

      <ModalBox
        modalStatus={modalStatus}
        toggle={toggle}
        formCategory={formCategory}
        formType={formType}
        onSubmit={onSubmit}
        type={type}
        category={category}
        defVal=''
        btnText={'Guardar'}
      />

      <ModalBox
        modalStatus={modalStatus2}
        toggle={toggle2}
        formCategory={formCategory}
        formType={formType}
        onSubmit={editData}
        type={type}
        category={category}
        defVal={modalInfo}
        btnText={'Editar'}
      />

    </article>

  );
}

export default Products;