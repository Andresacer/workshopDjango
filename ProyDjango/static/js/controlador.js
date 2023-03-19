** 
* Cambia la cantidad de un producto en el carrito 
* @param {int} id: PK del registro del produto en el carrito 
*/ 
function cambiarCantidad(id) { 
    let cantidad = document.getElementById('cantidad_'+id).value; 
    let valorUnit = document.getElementById('cantidad_'+id).dataset.preciou; 
    
    let url = "http://localhost:8000/productos/cambiarCantidad/"; 
    let datos = { 
        'id': id, 
        'cantidad': cantidad 
    }; 
    
    let total = parseFloat(cantidad) * parseFloat(valorUnit); 
    document.getElementById('total_'+id).innerText = '$' + total; 
    mensajeAjax(url, datos, cambiarCantidadResp) 
} 

function cambiarCantidadResp(data) { 
    document.getElementById('subtotal').innerText = '$' + data['subtotal']; 
    document.getElementById('iva').innerText = '$' + data['iva']; 
    document.getElementById('envio').innerText = '$' + data['envio']; 
    document.getElementById('total').innerText = '$' + data['total']; }