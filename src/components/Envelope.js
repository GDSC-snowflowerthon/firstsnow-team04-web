import closed from "../assets/envelope-close.svg";
import opened from "../assets/envelope-open.svg";
import "./Envelope.css";

const IMG = {
  ["open"]: opened,
  ["close"]: closed,
};
const envelopeClass = {
  ["open"]: "Envelope-open",
  ["close"]: "Envelope-close",
};

const Envelope = ({ letter }) => {
  return (
    <div className="Envelope-Container">
      <img className={envelopeClass[letter.is_open]} src={IMG[letter.is_open]}></img>
      <p className="Envelope-Text">{letter.sender_id}</p>
    </div>
  );
};

export default Envelope;
