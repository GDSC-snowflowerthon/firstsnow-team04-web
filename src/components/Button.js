import "./Button.css";

const Button = ({ color, text, func }) => {
  return (
    <div className="Button">
      {color === "dark" ? (
        /*ButtonDark*/
        <button className="ButtonDark" onClick={func}>
          {text}
        </button>
      ) : (
        /*ButtonWhite*/
        <button className="ButtonWhite" onClick={func}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
