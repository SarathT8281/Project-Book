


import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3055/getCart');
      console.log(response.data);
      setCartItems(response.data);
    } catch (error) {
      console.log('Error fetching cart items', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

   const decreaseQuantity = async (itemId) => {
    try {
      const response = await axios.put(`http://localhost:3055/updatecount/${itemId}`, {
        action: 'decrease',
      });
      fetchCartItems();
    } catch (error) {
      console.log('Error decreasing quantity', error);
    }
  };
  const increaseQuantity = async (itemId) => {
    try {
      const response = await axios.put(`http://localhost:3055/updatecount/${itemId}`, {
        action: 'increase',
      });
      fetchCartItems();
      return  cartItems.reduce((total, item) => total + item.Total, 0);
    } catch (error) {
      console.log('Error increasing quantity', error);
    }
  };




  const removeCartItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3055/deletecart/${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.log('Error removing item from cart', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.Total, 0);
  };

  return (
    <div>
      <div>
        <table border={1} className='next'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.Product}</td>
                <td>₹ {item.Price}</td>
                <td className='btns'>
                  <Button className='newbtns' onClick={() => decreaseQuantity(item._id)}>-</Button>
                  <h2>{item.Quantity}</h2>
                  <Button className='newbtns' onClick={() => increaseQuantity(item._id)}>+</Button>
                </td>
                <td>₹ {item.Total}</td>
                <td>
                 <Link onClick={() => removeCartItem(item._id)}>
                    <AiTwotoneDelete size={25} color='red' />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className='total-label' style={{color:'blue',fontSize:'20px'}}>
                Total Price:
              </td>
              <td colSpan={2} className='total-amount' style={{fontSize:'30px',backgroundColor:'yellow'}}>
                ₹ {calculateTotalPrice()}
              </td>
            
            </tr>
          </tfoot>
        </table>
       
        
     
       
       
      </div>
    </div>
  );
}

export default Cart;

