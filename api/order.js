// api/order.js
import { supabase } from '../supabase'; // Reutilizamos la configuración de Supabase

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { order } = req.body;

    try {
      // Insertar el pedido en la tabla "orders" en Supabase
      const { data, error } = await supabase.from('orders').insert([
        { items: order },
      ]);

      if (error) {
        throw error;
      }

      // Respuesta exitosa si el pedido se guarda en Supabase
      res.status(200).json({ message: 'Pedido guardado exitosamente' });
    } catch (error) {
      console.error('Error al guardar el pedido:', error);
      res.status(500).json({ message: 'Error guardando el pedido' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
