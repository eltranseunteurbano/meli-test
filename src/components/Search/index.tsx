import React from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const { className } = props;
  const [ , setSearchParams ] = useSearchParams();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchData = formData.get('search') as string;
    if (!searchData) return;
    console.log(searchData);
    setSearchParams({ search: searchData });
  };

  return (
    <form className={cn(className, 'search')} onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
        className="search-input"
      />
      <button type="submit" className="search-btn">
        <img src="./assets/icons/ic_Search.svg" alt="Buscar" width={24} height={24} />
      </button>
    </form>
  );
};

export default Search;
