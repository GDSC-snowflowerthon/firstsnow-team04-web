import "./Button.css";

const Input = ({ value, text, func }) => {
  return (
    <div>
      <input
        className="Input"
        value={value}
        placeholder={text}
        onChange={func}
      ></input>
    </div>
  );
};

export default Input;
