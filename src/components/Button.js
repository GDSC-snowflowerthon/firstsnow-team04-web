import "./Button.css";

const Button = ({ value, color, text, onclick }) => {
  return (
    <div className="Button">
      {color === "dark" ? (
        /*ButtonDark*/
        <button value={value} className="ButtonDark" onClick={onclick}>
          {text}
        </button>
      ) : (
        /*ButtonWhite*/
        <button value={value} className="ButtonWhite" onClick={onclick}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
