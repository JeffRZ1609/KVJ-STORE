// Carrito
const carrito = [];
// Agregar productos
function comprasProducto(nombre, precio, cantidadId) {
   const cantidad = parseInt(document.getElementById(cantidadId).value);
   if (!cantidad || cantidad <= 0) {
       alert("Cantidad inválida");
       return;
   }
   let producto = carrito.find(p => p.nombre === nombre);
   if (producto) {
       producto.cantidad += cantidad;
   } else {
       carrito.push({
           nombre: nombre,
           precio: precio,
           cantidad: cantidad
       });
   }
   alert("Agregado al carrito: " + nombre);
}
// Mostrar carrito
function mostrarCarrito() {
   if (carrito.length === 0) {
       alert("Carrito vacío");
       return;
   }
   let mensaje = "🛒 Carrito:\n\n";
   let total = 0;
   carrito.forEach(p => {
       let subtotal = p.precio * p.cantidad;
       mensaje += `${p.nombre}\nCantidad: ${p.cantidad}\nSubtotal: ₡${subtotal}\n\n`;
       total += subtotal;
   });
   mensaje += "Total: ₡" + total;
   alert(mensaje);
}