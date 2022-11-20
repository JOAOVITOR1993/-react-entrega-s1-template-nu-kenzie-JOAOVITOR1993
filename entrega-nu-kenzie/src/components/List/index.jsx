import trash from "../../assets/icons/trash.svg"
import noCard from "../../assets/icons/NoCard.svg";
import "./styles.css"

export const List = ({listTransactions, setListTransactions, listRender, setListRender}) =>{

    const listAllTransactions = () =>{
        setListRender(listTransactions)
    }

    const listDeposits = () =>{
        const deposits = listTransactions.filter(element =>{
            if(element.type === "Entrada"){
                return element
            }
        })
        setListRender(deposits)
    }

    const listExpenses = () =>{
        const expenses = listTransactions.filter(element =>{
            if(element.type === "Saída"){
                return element
            }
        })
        setListRender(expenses)
    }

    const removeTransaction = (indexTransaction) =>{
        const newFilteredList = listTransactions.filter((element, index) =>{
          if(indexTransaction !== index){
            return element
          }
        })
        setListTransactions(newFilteredList)
        setListRender(newFilteredList)
      }

    return(
        <div>
        <div className="divButtons">
            <h2>Resumo financeiro</h2>
            <div>
                <button className="buttonDefault buttonPrimary" onClick={listAllTransactions}>Todos</button>
                <button className="buttonDefault buttonGrey" onClick={listDeposits}>Entradas</button>
                <button className="buttonDefault buttonGrey" onClick={listExpenses}>Despesas</button>
            </div>
        </div>
         <ul className="ulTransactions">
             {listRender.length !== 0 ? (
                  listRender.map((element, index) =>{
                    const {description, type, value} = element
                  
                    return(
                        <li key={index} className={type === "Entrada"? "borderLeftLiGreen" : "borderLeftLiGrey"}>
                            <div>
                                <h2>{description}</h2>
                                <p>{type}</p>
                            </div>
                            <div>
                                <p>R$ {value.toFixed(2)}</p>
                                <button onClick={() => removeTransaction(index)}><img src={trash} alt="trash" /></button>
                            </div>
                        </li>
                    )
                })
             ):(
                <div className="divNoCard">
                    <h3>Você ainda não possui nenhum lançamento</h3>
                    <figure>
                        <img src={noCard} alt="noCard" />
                    </figure>
                </div>
             )
          
        }
        </ul>
        </div>
    )
}