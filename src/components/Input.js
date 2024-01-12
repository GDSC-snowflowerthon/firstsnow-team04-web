import "./Button.css";

const Input = ({ value, text, func }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="Input"
          value={value}
          placeholder={text}
          onChange={func}
        ></input>
      </form>
    </div>
  );
};

export default Input;
