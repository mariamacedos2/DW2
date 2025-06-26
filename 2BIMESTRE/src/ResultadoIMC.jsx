function ResultadoIMC({ imc, categoria }) {
  if (!imc) return null;
  return (
    <div>
      <p>Seu IMC: <strong>{imc}</strong></p>
      <p>Categoria: <strong>{categoria}</strong></p>
    </div>
  );
}

export default ResultadoIMC;