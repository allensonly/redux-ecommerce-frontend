import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addTOCart } from '../redux/slices/cartSlice';

function Wishlist() {

  const dispatch = useDispatch()

  const handlewishlist = (item) => {
    dispatch(addTOCart(item))
    dispatch(removeFromWishlist(item.id))

  }



  const wishlistArray = useSelector((state) => state.wishlistreducer)
  console.log(wishlistArray);

  return (
    <div style={{marginTop:'150px'}}>
      <Row className='ms-5 me-5'>

        {
          wishlistArray?.length>0?
          wishlistArray?.map((item) => (
            <Col  className='mb-5' sm={12} md={6} lg={4} xl={3}>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} style={{height :'200px'}}/>
            <Card.Body>
              <Card.Title>{item.title.slice(0,20)}</Card.Title>
              <p>{item.description.slice(0,50)}</p>
             <div className='justify-content-between d-flex align-items-center'>
             <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash "></i></Button>
              <Button variant="outline-success" onClick={ () => handlewishlist(item)}><i class="fa-solid fa-cart-plus "></i></Button>
             </div>
            </Card.Body>
          </Card>
         
         
         
            </Col>
          )):
          <div>
            <p>nothing to display</p>
            <button className='btn btn-sucess bg-warning'><Link to ={'/'} style={{textDecoration:'none'}}>Back to home</Link></button>
          </div>
        }
      
      </Row>




    </div>
  )
}

export default Wishlist