// api/order.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { order } = req.body;
  
      // Aquí podrías agregar lógica adicional si fuera necesario (guardar en una DB, etc.)
  
      // Retornamos un estado 200 indicando que el pedido fue recibido correctamente.
      res.status(200).json({ message: 'Pedido recibido exitosamente' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  