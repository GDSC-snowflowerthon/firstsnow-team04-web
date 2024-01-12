import closed from "../assets/envelope-close.svg";
import opened from "../assets/envelope-open.svg";
import "./Envelope.css";

const IMG = {
  ["open"]: opened,
  ["close"]: closed,
};

const Envelope = ({ letter }) => {
  return (
    <div className="Envelope-Container">
      <img className="Envelope" src={IMG[letter.is_open]}></img>
      <div className="Envelope-Text">{letter.sender_id}</div>
    </div>
  );
};

export default Envelope;
