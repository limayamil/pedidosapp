// src/components/Menu.jsx
import React, { useState } from 'react';

const Menu = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Hamburguesa', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
    { id: 3, name: 'Ensalada', price: 7 },
    { id: 4, name: 'Bebida', price: 3 },
    { id: 5, name: 'Papas fritas', price: 5 },
  ]);
  
  const [order, setOrder] = useState([]);

  // Función para agregar ítems al pedido
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  // Función para enviar el pedido
  const placeOrder = async () => {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    });

    const data = await res.json();
    alert(data.message); // Muestra mensaje en pantalla
  };

  return (
    <div>
      <h1>Menú</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToOrder(item)}>Agregar</button>
          </li>
        ))}
      </ul>
      <h2>Pedido</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={placeOrder}>Enviar Pedido</button>
    </div>
  );
};

export default Menu;
