import searchIcon from "../assets/search.svg";
const SearchNickname = () => {
  return (
    <form className="Search-Container">
      <img src={searchIcon} alt="search" className="Search-Icon" />
      <input
        type="text"
        className="Search-Input"
        placeholder="닉네임으로 친구 검색"
      ></input>
    </form>
  );
};

export default SearchNickname;
