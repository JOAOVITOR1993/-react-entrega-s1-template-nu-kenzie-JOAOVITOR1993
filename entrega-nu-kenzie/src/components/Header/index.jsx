import logo from "../../../src/assets/icons/Nu Kenzie.svg";
import { Buttons } from "../Buttons";

export const Header = ({ logout }) => {
  return (
    <header>
      <div className="divHeader container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <Buttons name={"Início"} className={"buttonDefault buttonGrey"} onClick={logout}/>
      </div>
    </header>
  );
};
