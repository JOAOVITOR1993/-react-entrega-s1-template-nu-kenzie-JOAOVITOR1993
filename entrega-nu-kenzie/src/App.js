import logoWhite from "../src/assets/icons/Nu Kenzie white.svg";
import imgIndex from "../src/assets/icons/illustration.svg";
import "./App.css";
import "./styles/buttons.css";
import { useState } from "react";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const [listRender, setListRender] = useState(listTransactions);

  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };

  return (
    <div className="App">
      {!isLogin ? (
        <div className="divBackground">
          <div className="sectionDivFigure container">
            <div>
              <figure>
                <img src={logoWhite} alt="logo" />
              </figure>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rápida e segura</p>
              <button
                onClick={login}
                className="buttonDefaultBig buttonPrimary"
              >
                Iniciar
              </button>
            </div>
            <figure>
              <img src={imgIndex} alt="imgIndex" />
            </figure>
          </div>
        </div>
      ) : (
        <>
          <Header logout={logout} />
          <main className="container">
            <section className="sectionFormTotal">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                listRender={listRender}
                setListRender={setListRender}
              />
              <TotalMoney listTransactions={listTransactions} />
            </section>

            <section className="sectionList">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                listRender={listRender}
                setListRender={setListRender}
              />
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
