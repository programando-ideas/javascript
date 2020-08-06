function esCero(num) {
    return num === 0;
}

exports.sumar = (n1, n2) => {
    if (esCero(n1)) return n2;
    if (esCero(n2)) return n1;

    return n1 + n2;
}

exports.persona = class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}