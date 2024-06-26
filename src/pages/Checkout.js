import React from 'react';

const Checkout = ({ cartItems, updateQuantity, finalizeOrder }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log('Checkout items:', cartItems);
  console.log('Total:', total);

  const handleFinalizeOrder = () => {
    finalizeOrder();
  }

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-2xl mb-4">Checkout</h2>
      {cartItems.map((item) => (
        <CheckoutItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
        />
      ))}
      <h3 className="text-xl mt-4">Total: ${total.toFixed(2)}</h3>
      <button 
        onClick={handleFinalizeOrder} 
        className="w-full bg-green-500 text-white p-2 rounded shadow mt-4"
      >
        Finalize Order
      </button>
    </div>
  );
}

const CheckoutItem = ({ item, updateQuantity }) => {
  const handleQuantityChange = (e) => {
    updateQuantity(item.id, e.target.value);
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
      </div>
      <input 
        type="number" 
        value={item.quantity} 
        min="1"
        onChange={handleQuantityChange} 
        className="w-16 p-2 border rounded"
      />
    </div>
  );
}

export default Checkout;
