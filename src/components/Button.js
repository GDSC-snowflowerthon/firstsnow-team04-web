const Button = ({ color, text }) => {
  return (
    <div>
      {color === "dark"}?
      {
        /*ButtonDark*/
        <div className="ButtonDark">{text}</div>
      }
      :
      {
        /*ButtonWhite*/
        <div className="ButtonWhite">{text}</div>
      }
    </div>
  );
};

export default Button;
