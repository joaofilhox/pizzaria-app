import React, { useState } from 'react';

const PizzaList = ({ pizzas, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} addToCart={addToCart} />
      ))}
    </div>
  );
}

const PizzaItem = ({ pizza, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(pizza, quantity);
  }

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl">{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <input 
        type="number" 
        value={quantity} 
        min="1"
        onChange={(e) => setQuantity(e.target.value)} 
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={handleAddToCart} 
        className="w-full bg-blue-500 text-white p-2 rounded shadow mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PizzaList;
