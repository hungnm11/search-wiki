import { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { useDebounce, useSearch, useSearchForm } from './hooks';

function App() {
  const [value, setValue] = useState('');

  const { searchValue, onSearchChange } = useSearchForm();
  const { articles, status, error } = useSearch(useDebounce(searchValue, 500));

  return (
    <div className='App'>
      <Autocomplete
        items={articles}
        getItemValue={(item: any) => item.label}
        shouldItemRender={(item: any, value: any) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        renderItem={(item: any, highlighted: any) => (
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
          >
            {item.label}
          </div>
        )}
        value={searchValue}
        onChange={onSearchChange}
        onSelect={(val: any) => setValue(value)}
      />
    </div>
  );
}

export default App;
