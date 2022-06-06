import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Form } from 'reactstrap';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';



const ModalBox = ({ modalStatus, toggle, formCategory, formType, onSubmit, type, category, defVal }) => {

  const { register, handleSubmit, reset, formState } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        price: ''
      })
    }
  }, [formState, reset])

  useEffect(() => {
    if (modalStatus === true) {
      reset({
        name: defVal.name,
        price: defVal.price
      })
    } else if (modalStatus === false) {
      reset({
        name: '',
        price: ''
      })
    }
  }, [modalStatus, defVal.name, defVal.price, reset])


  return (
    <Modal isOpen={modalStatus} toggle={toggle} centered size="lg" style={{ maxWidth: '85%', width: '100%' }} >
      <ModalHeader close={<button className="close" onClick={toggle}>X</button>}>
        Agrega un nuevo producto
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='nameP'>Nombre</Label>
            <input type='text' id='nameP' {...register('name')} defaultValue={defVal.name} />
          </FormGroup>
          <FormGroup>
            <Label for='price'>Precio</Label>
            <input type='text' id='price' {...register('price')} defaultValue={defVal.price} />
          </FormGroup>
          <p>Tipo</p>
          <FormGroup check>
            <Label for='food'>Alimento</Label>
            <input type='radio' id='food' name='type' value='Alimento' onChange={formType} checked={defVal.type==='Alimento'?true:null} {...register(type)} />
          </FormGroup>
          <FormGroup check>
            <Label for='drink'>Bebida</Label>
            <input type='radio' id='drink' name='type' value='Bebida' onChange={formType} checked={defVal.type==='Bebida'?true:null}{...register(type)} />
          </FormGroup>
          <FormGroup check>
            <Label for='extra'>Extra</Label>
            <input type='radio' id='extra' name='type' value='Extra' onChange={formCategory} checked={defVal.type==='Extra'?true:null} {...register(type)} />
          </FormGroup>
          <p>Categoría</p>
          <FormGroup check>
            <Label for='breakfast'>Desayuno</Label>
            <input type='radio' id='breakfast' name='category' value='Desayuno' onChange={formCategory} checked={defVal.category==='Desayuno'?true:null}{...register(category)} />
          </FormGroup>
          <FormGroup check>
            <Label for='lunch'>Comida</Label>
            <input type='radio' id='lunch' name='category' value='Comida' onChange={formCategory} checked={defVal.category==='Comida'?true:null}{...register(category)} />
          </FormGroup>
          <FormGroup>
            <Label for='image'>Imagen</Label>
            <input type='file' id='image' {...register('img')} />
          </FormGroup>
          <Button className='add-product'>Guardar</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default ModalBox;