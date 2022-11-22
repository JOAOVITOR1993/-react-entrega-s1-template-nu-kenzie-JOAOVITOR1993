import "./styles.css";

export const TotalMoney = ({ listTransactions }) => {
  function total() {
    const prices = listTransactions.map((element) => {
      return element.value;
    });

    const totalPrice = prices.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalPrice;
  }

  return (
    <div className="divTotal">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <p>R$ {total().toFixed(2)}</p>
    </div>
  );
};
