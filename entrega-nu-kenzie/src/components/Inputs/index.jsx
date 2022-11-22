import { Select } from "../Select";

export const Inputs = ({
  textInput,
  valueInput,
  typeSelect,
  setTextInput,
  setValueInput,
  setTypeSelect,
}) => {
  return (
    <>
      <label>Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
        required
      />
      <p>Ex: Compra de roupas</p>

      <div className="divValueType">
        <div>
          <label>Valor</label>
          <input
            type="number"
            placeholder="1"
            value={valueInput}
            onChange={(event) =>
              event.target.value >= 0
                ? setValueInput(event.target.value)
                : (event.target.value = 0)
            }
            required
          />
          <p>R$</p>
        </div>
          <Select typeSelect={typeSelect} setTypeSelect={setTypeSelect} />
      </div>
    </>
  );
};
