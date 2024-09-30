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
        console.error('Error al insertar en Supabase:', error);
        return res.status(500).json({ message: 'Error al guardar el pedido en Supabase', error });
      }

      // Respuesta exitosa si el pedido se guarda en Supabase
      return res.status(200).json({ message: 'Pedido guardado exitosamente', data });
    } catch (error) {
      console.error('Error interno del servidor:', error);
      return res.status(500).json({ message: 'Error interno del servidor', error });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
