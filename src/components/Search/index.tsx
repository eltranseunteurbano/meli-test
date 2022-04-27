import cn from "classnames";

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(className, 'search')}>
      <input type="text" placeholder="Nunca dejes de buscar" className="search-input" />
      <button type="button" className="search-btn">
        <img src="./assets/icons/ic_Search.svg" alt="Buscar" />
      </button>
    </div>
  )
}

export default Search;