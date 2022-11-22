export const Buttons = ({
  listAllTransactions,
  listDeposits,
  listExpenses,
}) => {
  return (
    <div className="divButtons">
      <h2>Resumo financeiro</h2>
      <div>
        <button
          className="buttonDefault buttonPrimary"
          onClick={listAllTransactions}
        >
          Todos
        </button>
        <button className="buttonDefault buttonGrey" onClick={listDeposits}>
          Entradas
        </button>
        <button className="buttonDefault buttonGrey" onClick={listExpenses}>
          Despesas
        </button>
      </div>
    </div>
  );
};

export const ButtonForm = () => {
  return (
    <button className="buttonDefaultBig buttonPrimary" type="submit">
      Inserir valor
    </button>
  );
};
