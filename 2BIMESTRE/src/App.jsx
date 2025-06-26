import React, { useState } from 'react';
import './App.css';

import InputPeso from './InputPeso';
import InputAltura from './InputAltura';
import BotaoCalcular from './BotaoCalcular';
import ResultadoIMC from './ResultadoIMC';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  function calcularIMC() {
        if (!peso || !altura || altura === 0) {
    alert("Preencha os campos corretamente!");
    return;
   }

    const resultadoPessoa = (peso / (altura * altura)).toFixed(2);
    setImc(resultadoPessoa);

    let classificacao = '';
    if (resultadoPessoa < 18.5) classificacao = 'Baixo peso';
    else if (resultadoPessoa < 25) classificacao = 'Peso normal';
    else if (resultadoPessoa < 30) classificacao = 'Excesso de peso';
    else if (resultadoPessoa < 35) classificacao = 'Obesidade de classe 1';
    else if (resultadoPessoa < 40) classificacao = 'Obesidade de classe 2';
    else classificacao = 'Obesidade de classe 3';

    setCategoria(classificacao);
  }

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>

      <InputPeso peso={peso} setPeso={setPeso} />
      <InputAltura altura={altura} setAltura={setAltura} />
      <BotaoCalcular onClick={calcularIMC} />
      <ResultadoIMC imc={imc} categoria={categoria} />
    </div>
  );
}

export default App;