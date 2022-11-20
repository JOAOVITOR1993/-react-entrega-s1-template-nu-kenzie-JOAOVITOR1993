import { useState } from "react"
import "./styles.css"

export const Form = ({listTransactions, setListTransactions, listRender, setListRender}) => {
  const [valueInput, setValueInput] = useState("")
  const [textInput, setTextInput] = useState("")
  const [typeSelect, setTypeSelect] = useState("")
 
  const addTransaction = () => {
    setListTransactions([...listTransactions, {description: textInput, type: typeSelect, value: typeSelect === "Saída" ? Number(`-${valueInput}`) : Number(valueInput)}])
    setListRender([...listRender, {description: textInput, type: typeSelect, value: typeSelect === "Saída" ? Number(`-${valueInput}`) : Number(valueInput)}])
  }
 
  return (
    <form onSubmit={(event) => addTransaction(event.preventDefault())}>
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
          onChange={(event) => setValueInput(event.target.value)}
          required                 
          />
          <p>R$</p>
        </div>
     
        <div>
          <label>Tipo de valor</label>
          <select onChange={(event) => setTypeSelect(event.target.value)} value={typeSelect} required>
            <option>Selecione</option>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
      </div>
    
      <button className="buttonDefaultBig buttonPrimary" type="submit">Inserir valor</button>
    </form>
  )
}
