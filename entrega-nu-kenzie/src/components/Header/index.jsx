import logo from "../../../src/assets/icons/Nu Kenzie.svg";

export const Header = ({ logout }) => {
  return (
    <header>
      <div className="divHeader container">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <button onClick={logout} className="buttonDefault buttonGrey">
          Início
        </button>
      </div>
    </header>
  );
};
