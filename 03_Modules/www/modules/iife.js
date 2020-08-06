// IIFE -  Immediately Invoked Function Expression - (function () {})();
(function () {
    var variable_global_iife = 100;

    function sumar(n1, n2) {
        return n1 + n2;
    }

    function multiplicar(n1, n2) {
        return n1 * n2;
    }
    
    nsIIFE.App.funcionesMath = {
        sumar,
        multiplicar
    }
})();
