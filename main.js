let producto = '';
let cantidad = 0;
let precio = 0;
let continuarCompra = false;
let carrito = 0;

do {
    producto = prompt("Ingresa el producto que quieres");
    cantidad = parseInt(prompt("¿Cuántos te gustaría añadir al carrito?"))


    switch (producto) {

        case 'Detergente':
            precio = 5000;
            break;

        case 'Suavizante':
            precio = 6000;
            break;

        case 'Ambiental aromas':
            precio = 8000;
            break;

        case 'Limpia pisos aromas':
            precio = 4000;
            break;

        case 'Desmanchador líquido':
            precio = 6000;
            break;





    }

    carrito += precio * cantidad;
    cantidadTotal += cantidad;

    continuarCompra = confirm('¿Le gustaría agregar otro producto?')


}

while (continuarCompra);

console.log(carito);
console.log(cantidadTotal);








