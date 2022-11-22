import { useState } from "react";
import "./styles.css";
import { v4 } from "uuid";
import { Inputs } from "../Inputs";
import { ButtonForm } from "../Buttons";


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
      <Inputs
        textInput={textInput}
        valueInput={valueInput}
        typeSelect={typeSelect}
        setTextInput={setTextInput}
        setValueInput={setValueInput}
        setTypeSelect={setTypeSelect}
      />
      <ButtonForm />
    </form>
  );
};
