import trash from "../../assets/icons/trash.svg";
import noCard from "../../assets/icons/NoCard.svg";
import "./styles.css";
import { Buttons } from "../Buttons";

export const List = ({
  listTransactions,
  setListTransactions,
  listRender,
  setListRender,
}) => {
  const listAllTransactions = () => {
    setListRender(listTransactions);
  };

  const listDeposits = () => {
    const deposits = listTransactions.filter((element) => {
      if (element.type === "Entrada") {
        return element;
      }
    });
    setListRender(deposits);
  };

  const listExpenses = () => {
    const expenses = listTransactions.filter((element) => {
      if (element.type === "Saída") {
        return element;
      }
    });
    setListRender(expenses);
  };

  const removeTransaction = (idTransaction) => {
    const newFilteredList = listTransactions.filter((element) => {
      if (idTransaction !== element.id) {
        return element;
      }
    });
    setListTransactions(newFilteredList);
    setListRender(newFilteredList);
  };

  return (
    <div>
      <Buttons
        listAllTransactions={listAllTransactions}
        listDeposits={listDeposits}
        listExpenses={listExpenses}
      />

      <ul className="ulTransactions">
        {listRender.length !== 0 ? (
          listRender.map((element, index) => {
            const { id, description, type, value } = element;

            return (
              <li
                key={index}
                className={
                  type === "Entrada" ? "borderLeftLiGreen" : "borderLeftLiGrey"
                }
              >
                <div>
                  <h2>{description}</h2>
                  <p>{type}</p>
                </div>
                <div>
                  <p>R$ {value.toFixed(2)}</p>
                  <button onClick={() => removeTransaction(id)}>
                    <img src={trash} alt="trash" />
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <div className="divNoCard">
            <h3>Você ainda não possui nenhum lançamento</h3>
            <figure>
              <img src={noCard} alt="noCard" />
            </figure>
          </div>
        )}
      </ul>
    </div>
  );
};
