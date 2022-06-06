import { useState, useLayoutEffect } from 'react';
import plus from '../../../components/images/Plus.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../products/Products.css';
import Header from './Header'
import { Button/*, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Form*/ } from 'reactstrap';
// import { useForm } from "react-hook-form";
import ModalBox from './ModalBox';

//por alguna razón que no entiendo, Input de Bootstrap no funciona con useForm

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalStatus2, setModalStatus2] = useState(false);
  const [type, setType] = useState('type');
  const [category, setCategory] = useState('category');
  const [modalInfo, setModalInfo] = useState({});
  
  // const { register, handleSubmit } = useForm()

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
        setProducts(products.concat(response))
      });
  }


  const onSubmit = (data) => {
    console.log(data)
    createProduct(data)
    toggle()
  }

  const loadData = (data) => {
    toggle2();
    console.log(data);
    setModalInfo(data);
  }

  const editData = (data) => {
    console.log(data)
    toggle()
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
    <ModalBox modalStatus={modalStatus} toggle={toggle} formCategory={formCategory} formType={formType} onSubmit={onSubmit} type={type} category={category} defVal=''/>
      {/* <Modal isOpen={modalStatus} toggle={toggle} centered size="lg" style={{ maxWidth: '85%', width: '100%' }} >
        <ModalHeader close={<button className="close" onClick={toggle}>X</button>}>
          Agrega un nuevo producto
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for='name'>Nombre</Label>
              <input type='text' id='name' {...register('name')} />
            </FormGroup>
            <FormGroup>
              <Label for='price'>Precio</Label>
              <input type='text' id='price' {...register('price')} />
            </FormGroup>
            <p>Tipo</p>
            <FormGroup check>
              <Label for='food'>Alimento</Label>
              <input type='radio' id='food' name='type' value='Alimento' onChange={formType} {...register(type)} />
            </FormGroup>
            <FormGroup check>
              <Label for='drink'>Bebida</Label>
              <input type='radio' id='drink' name='type' value='Bebida' onChange={formType} {...register(type)} />
            </FormGroup>
            <FormGroup check>
              <Label for='extra'>Extra</Label>
              <input type='radio' id='extra' name='type' value='Extra' onChange={formCategory} {...register(type)} />
            </FormGroup>
            <p>Categoría</p>
            <FormGroup check>
              <Label for='breakfast'>Desayuno</Label>
              <input type='radio' id='breakfast' name='category' value='Desayuno' onChange={formCategory} {...register(category)} />
            </FormGroup>
            <FormGroup check>
              <Label for='lunch'>Comida</Label>
              <input type='radio' id='lunch' name='category' value='Comida' onChange={formCategory} {...register(category)} />
            </FormGroup>
            <FormGroup>
              <Label for='image'>Imagen</Label>
              <input type='file' id='image' {...register('img')} />
            </FormGroup>
            <Button className='add-product'>Guardar</Button>
          </Form>
        </ModalBody>
      </Modal> */}
      {/* <Modal isOpen={modalStatus2} toggle={toggle2} >
        <ModalHeader close={<button className="close" onClick={toggle2}>X</button>}>
        </ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit(editData)}>
            <FormGroup>
              <Label for='nameEdit'>Nombre</Label>
              <input type='text' id='nameEdit' defaultValue='pedo' {...register('nameEdit')}/>
            </FormGroup>
            <FormGroup>
              <Label for='priceEdit'>Precio</Label>
              <input type='text' id='priceEdit' {...register('priceEdit')} key={modalInfo.id}defaultValue={modalInfo.price} />
            </FormGroup>
            <p>Tipo</p>
            <FormGroup check>
              <Label for='foodEdit'>Alimento</Label>
              <input 
              type='radio' 
              id='foodEdit' 
              name='typeEdit' 
              value='Alimento' 
              onChange={formType} 
              {...register(type)} 
            />
            </FormGroup>
            <FormGroup check>
              <Label for='drinkEdit'>Bebida</Label>
              <input type='radio' id='drinkEdit' name='typeEdit' value='Bebida' onChange={formType} {...register(type)} />
            </FormGroup>
            <FormGroup check>
              <Label for='extraEdit'>Extra</Label>
              <input type='radio' id='extraEdit' name='typeEdit' value='Extra' onChange={formCategory} {...register(type)} />
            </FormGroup>
            <p>Categoría</p>
            <FormGroup check>
              <Label for='breakfastEdit'>Desayuno</Label>
              <input type='radio' id='breakfastEdit' name='categoryEdit' value='Desayuno' onChange={formCategory} {...register(category)} />
            </FormGroup>
            <FormGroup check>
              <Label for='lunchEdit'>Comida</Label>
              <input type='radio' id='lunchEdit' name='categoryEdit' value='Comida' onChange={formCategory} {...register(category)} />
            </FormGroup>
            <FormGroup>
              <Label for='imagEdite'>Imagen</Label>
              <input type='file' id='imageEdit' {...register('img')} />
            </FormGroup>
            <Button className='add-product'>Guardar</Button>
          </Form>
          <p>Nombre: {modalInfo.name}</p>
          <p>Precio: {modalInfo.price}</p>
          <p>Tipo: {modalInfo.type}</p>
          <p>Categoría: {modalInfo.category}</p>
        </ModalBody>
        <ModalFooter>
          <Button color='primary'>Editar</Button>
        </ModalFooter>
      </Modal> */}
      <ModalBox modalStatus={modalStatus2} toggle={toggle2} formCategory={formCategory} formType={formType} onSubmit={editData} type={type} category={category} defVal={modalInfo}/>

    </article>

  );
}

export default Products;