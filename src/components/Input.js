import "./Button.css";

const Input = ({ value, text, func }) => {
  return (
    <input
      type="text"
      className="Input"
      value={value}
      placeholder={text}
      onChange={func}
    ></input>
  );
};

export default Input;
