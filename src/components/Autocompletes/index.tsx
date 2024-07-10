import { CSSProperties, ReactNode } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';
import Input from '../Input';

const Autocomplete = ({
  articles,
  searchValue,
  onSearchChange,
}: {
  articles: any;
  searchValue: any;
  onSearchChange: any;
}) => {
  const getItemValue = (item: any) => item.label;

  const shouldItemRender = (item: any, value: any) =>
    item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;

  const renderItem = (item: any, highlighted: any) => {
    return (
      <div
        key={item.id}
        style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
      >
        <Link to={`/search/${item.label}`}>{item.label}</Link>
      </div>
    );
  };

  const renderMenu = (
    children: ReactNode[],
    value: string,
    styles: CSSProperties
  ): ReactNode => {
    return articles && articles.length ? (
      <div className='input-suggestions' style={{ ...styles }}>
        {children}
        <a href={`/search?query=${value}`} className='search-link'>
          See all results
        </a>
      </div>
    ) : (
      <></>
    );
  };

  //   const onSelect = (value) => setValue(value);

  return (
    <div className='App'>
      <ReactAutocomplete
        items={articles}
        getItemValue={getItemValue}
        shouldItemRender={shouldItemRender}
        renderItem={renderItem}
        value={searchValue}
        onChange={onSearchChange}
        // onSelect={onSelect}
        renderInput={Input}
        inputProps={{ placeholder: 'Input search here' }}
        renderMenu={renderMenu}
      />
    </div>
  );
};

export default Autocomplete;
