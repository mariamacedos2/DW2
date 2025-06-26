import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  // 👉 PASSO 4: Função para calcular o IMC e definir a categoria
  function calcularIMC() {
    const imcCalculado = (peso / (altura * altura)).toFixed(2);
    setImc(imcCalculado);

    let classificacao = '';
    if (imcCalculado < 18.5) classificacao = 'Baixo peso';
    else if (imcCalculado < 25) classificacao = 'Peso normal';
    else if (imcCalculado < 30) classificacao = 'Excesso de peso';
    else if (imcCalculado < 35) classificacao = 'Obesidade de classe 1';
    else if (imcCalculado < 40) classificacao = 'Obesidade de classe 2';
    else classificacao = 'Obesidade de classe 3';

    setCategoria(classificacao);
  }

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>

      {/* Inputs e botão */}
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular IMC</button>

      {/* Resultado */}
      {imc && (
        <div>
          <p>Seu IMC: <strong>{imc}</strong></p>
          <p>Categoria: <strong>{categoria}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;