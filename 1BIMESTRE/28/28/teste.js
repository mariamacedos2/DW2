function calcularDesconto(preco = 100, desconto = 10) {
    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`Preço com desconto: R$ ${valorFinal.toFixed(2)}`);
  }
  
  calcularDesconto(200, 15); // Saída: Preço com desconto: R$ 170.00
  calcularDesconto(150);     // Saída: Preço com desconto: R$ 135.00
  calcularDesconto();        // Saída: Preço com desconto: R$ 90.00