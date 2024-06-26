import React from 'react';
import { useSelector } from 'react-redux';
import PizzaList from './components/PizzaList';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

const pizzas = [
  { id: 1, name: 'Margherita', description: 'Tomato, mozzarella, and basil', price: 10 },
  { id: 2, name: 'Pepperoni', description: 'Pepperoni, mozzarella, and tomato sauce', price: 12 },
  // Adicione mais pizzas aqui
];

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (pizza, quantity) => {
    console.log(`Adding to cart: ${pizza.name}, Quantity: ${quantity}`);
    const existingItem = cartItems.find(item => item.id === pizza.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === pizza.id ? { ...item, quantity: item.quantity + Number(quantity) } : item
      ));
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: Number(quantity) }]);
    }
    console.log(`Cart items after adding:`, cartItems);
  }

  const removeFromCart = (id) => {
    console.log(`Removing item with ID: ${id}`);
    setCartItems(cartItems.filter(item => item.id !== id));
    console.log(`Cart items after removing:`, cartItems);
  }

  const updateQuantity = (id, quantity) => {
    console.log(`Updating quantity for item with ID: ${id}, New Quantity: ${quantity}`);
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    ));
    console.log(`Cart items after updating quantity:`, cartItems);
  }

  const finalizeOrder = () => {
    console.log('Order finalized:', cartItems);
    setCartItems([]);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Pizza Order System</h1>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <PizzaList pizzas={pizzas} addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          <Checkout
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            finalizeOrder={finalizeOrder}
          />
        </>
      )}
    </div>
  );
}

export default App;
