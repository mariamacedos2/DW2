function calculadora(x, y) {
    let z_a = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 3)) / Math.abs(x + y);
    let z_b = (1 + Math.sin(x)) / (1 + Math.cos(x));
    let z_c = 1 + (1 / x) + (1 / Math.pow(x, 2)) + (1 / Math.pow(x, 3)) + (1 / Math.pow(x, 4));
    let fracao = x / y;
    let z_d = fracao - ((x + Math.pow(fracao, 2)) / (x - Math.pow(fracao, 2)));
    let z_e = Math.sqrt(Math.PI + Math.sqrt(Math.exp(3) + Math.sqrt(4 + Math.sqrt(x))));

    return {
        z_a: z_a,
        z_b: z_b,
        z_c: z_c,
        z_d: z_d,
        z_e: z_e
    };
}

// Teste com valores de exemplo
let x = 2, y = 3;
let resul = calculadora(x, y);

console.log("Resultados das equações:");
console.log("a) z =", resul.z_a);
console.log("b) z =", resul.z_b);
console.log("c) z =", resul.z_c);
console.log("d) z =", resul.z_d);
console.log("e) z =", resul.z_e);
