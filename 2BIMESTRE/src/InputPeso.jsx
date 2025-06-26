
function InputPeso({ peso, setPeso }) {
  return (
    <input
      type="number"
      placeholder="Peso (kg)"
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
    />
  );
}

export default InputPeso;