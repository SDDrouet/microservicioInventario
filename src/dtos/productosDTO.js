class ProductoDTO {
    constructor(idProducto, nombre, descripcion, precio, stock) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
}

module.exports = ProductoDTO;
