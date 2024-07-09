import { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import Input from './components/Input';
import { useDebounce, useSearch, useSearchForm } from './hooks';

function App() {
  const [value, setValue] = useState('');

  const { searchValue, onSearchChange } = useSearchForm();
  const { articles, status, error } = useSearch(useDebounce(searchValue, 500));

  const getItemValue = (item: any) => item.label;

  const shouldItemRender = (item: any, value: any) =>
    item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;

  const renderItem = (item: any, highlighted: any) => (
    <div
      key={item.id}
      style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
    >
      {item.label}
    </div>
  );

  //   const onSelect = (value) => setValue(value);

  return (
    <div className='App'>
      <Autocomplete
        items={articles}
        getItemValue={getItemValue}
        shouldItemRender={shouldItemRender}
        renderItem={renderItem}
        value={searchValue}
        onChange={onSearchChange}
        // onSelect={onSelect}
        renderInput={Input}
        inputProps={{ placeholder: 'Input search here' }}
      />
    </div>
  );
}

export default App;
