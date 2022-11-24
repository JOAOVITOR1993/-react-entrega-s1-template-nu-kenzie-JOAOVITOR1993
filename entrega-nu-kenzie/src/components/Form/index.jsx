import { useState } from "react";
import "./styles.css";
import { v4 } from "uuid";
import { Input } from "../Inputs";
import { Buttons} from "../Buttons";
import { Select } from "../Select";

export const Form = ({
  listTransactions,
  setListTransactions,
  listRender,
  setListRender,
}) => {
  const [valueInput, setValueInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [typeSelect, setTypeSelect] = useState("");

  const setId = () => {
    return v4();
  };

  const addTransaction = () => {
    setListTransactions([
      ...listTransactions,
      {
        id: setId(),
        description: textInput,
        type: typeSelect,
        value:
          typeSelect === "Saída"
            ? Number(`-${valueInput}`)
            : Number(valueInput),
      },
    ]);
    setListRender([
      ...listRender,
      {
        id: setId(),
        description: textInput,
        type: typeSelect,
        value:
          typeSelect === "Saída"
            ? Number(`-${valueInput}`)
            : Number(valueInput),
      },
    ]);
  };


  return (
    <form onSubmit={(event) => addTransaction(event.preventDefault())}>
      <Input label={"Descrição"} type={"text"} placeholder={"Digite aqui sua descrição"} value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
      <p>Ex: Compra de roupas</p>
      <div className="divValueType">
        <div>
          <Input label={"Valor"} type={"number"} placeholder={"1"} value={valueInput} onChange={(event) => event.target.value >= 0 ? setValueInput(event.target.value) : (event.target.value = 0)}/>
          <p>R$</p>
        </div>
        <Select typeSelect={typeSelect} setTypeSelect={setTypeSelect} />
      </div>
      <Buttons name={"Inserir valor"} className={"buttonDefaultBig buttonPrimary"} type="submit"/>
    </form>
  );
};
