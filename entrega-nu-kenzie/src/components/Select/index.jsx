export const Select = ({ typeSelect, setTypeSelect }) => {
  return (
    <div className="divSelect">
      <label>Tipo de valor</label>
      <select
        onChange={(event) => setTypeSelect(event.target.value)}
        value={typeSelect}
        required
      >
        <option>Selecione</option>
        <option>Entrada</option>
        <option>Saída</option>
      </select>
    </div>
  );
};
