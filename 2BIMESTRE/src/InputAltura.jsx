
function InputAltura({ altura, setAltura }) {
  return (
    <input
      type="number"
      placeholder="Altura (m)"
      value={altura}
      onChange={(e) => setAltura(e.target.value)}
    />
  );
}

export default InputAltura;