import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log('Cart items:', cartItems);
  console.log('Total:', total);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-2xl mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      <h3 className="text-xl mt-4">Total: ${String(total.toFixed(2))}</h3>
    </div>
  );
}

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <h4>{item.name}</h4>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
      </div>
      <button 
        onClick={() => removeFromCart(item.id)} 
        className="bg-red-500 text-white p-2 rounded shadow"
      >
        Remove
      </button>
    </div>
  );
}

export default Cart;
