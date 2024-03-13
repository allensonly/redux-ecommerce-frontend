import React from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';

function Cart() {

const cartArray = useSelector((state) => state.cartreducer )
console.log(cartArray);

const dispatch = useDispatch()

const handlecart = (item) => {
  
  dispatch(removeFromCart(item.id))

}



  return (

    <div  style={{marginTop:'100px'}}> 

   <div className='row w-100'>

    
{
  cartArray?.length>0?
  

    <div className='col-lg-6 md-5'>

    <div className='table shadow border '>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>product</th>
          <th>image</th>
          <th>price</th>
          <th>Action</th>
        </tr>
      </thead> 
      <tbody>
       { 
       cartArray?.map((item,index) => (
        <tr className='mt-3 '>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img src={item.image} alt="no-image" style={{width:'70px',height:'70px'}}/></td>
          <td>{item.price}</td>
          <td><button variant='outline-danger' onClick={() => dispatch(removeFromCart(item.id))}><i class='fa-solid fa-trash'></i></button></td>
        </tr>

       ))
       
       }
      </tbody>
    </table>
     
    </div>
   </div>

     
    :
    <div>
            <p>nothing to display</p>
            <button className='btn btn-sucess bg-warning'><Link to ={'/'} style={{textDecoration:'none'}}>Back to home</Link></button>
          </div>
}

</div>



    </div>


    


    
  )
}

export default Cart