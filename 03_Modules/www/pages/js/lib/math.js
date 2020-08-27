define(function () {

    const suma1 = (num) => { return num + 1 };
    const multiplicar = (a, b) => { return a * b };

    // we can still return a module
    return {
        suma1,
        multiplicar
    };
});