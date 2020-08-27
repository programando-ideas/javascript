define(['math', 'msg'], function (math, msg) {
    const num = 10;
    const result = math.suma1(num);
    msg.mensaje(`El resultado de sumar 1 a ${num} es ${result}`);

    const a = 5, b = 6;
    const resultMult = math.multiplicar(a, b);
    msg.mensaje(`El resultado de multiplicar ${a}x${b} es ${resultMult}`);
});