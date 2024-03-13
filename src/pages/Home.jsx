import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from './hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addTOCart } from '../redux/slices/cartSlice';

function Home() {

  const data = useFetch('https://fakestoreapi.com/products')

  console.log(data);

  const dispatch = useDispatch()


  return (
   
    <Row className='m-5'>
{
   data?.length>0  ?
   data?.map((item) => ( <Col  className='mb-5 mt-2' sm={12} md={6} lg={4} xl={3}>

   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={item.image} style={{height :'200px'}}/>
   <Card.Body>
     <Card.Title>{item.title.slice(0,20)}</Card.Title>
     <p>{item.description.slice(0,50)}</p>
    <div className='justify-content-between d-flex align-items-center'>
    <Button variant="outline-danger" onClick={() => dispatch(addToWishlist(item))}><i class="fa-solid fa-heart "></i></Button>
     <Button variant="outline-success" onClick={() => dispatch(addTOCart(item))}><i class="fa-solid fa-cart-plus "></i></Button>
    </div>
   </Card.Body>
 </Card>



   </Col>))

   : <p>nothing to display</p>

}



    </Row>



  )
}

export default Home