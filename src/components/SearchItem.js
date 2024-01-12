import "./Search.css";

const SearchItem = ({ name, email }) => {
  return (
    <div className="SearchItem-Container">
      <div className="SearchItem-Name">{name}</div>
      <div className="SearchItem-Email">{email}</div>
    </div>
  );
};

export default SearchItem;
