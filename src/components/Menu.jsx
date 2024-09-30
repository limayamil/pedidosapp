// src/components/Menu.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase.from('menu').select('*');
      if (error) console.error(error);
      else setMenuItems(data);
    };
    fetchMenu();
  }, []);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const placeOrder = async () => {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    });

    const data = await res.json();
    alert(data.message);  // Alerta al cliente que el pedido fue recibido
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
      <button onClick={placeOrder}>Enviar Pedido</button>
    </div>
  );
};

export default Menu;
