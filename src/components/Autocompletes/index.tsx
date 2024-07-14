// AutocompleteExample.tsx
import ReactAutocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';

interface AutocompleteProps {
  articles: any[];
  searchValue: string;
  onSearchChange: any;
  status?: string;
}

const Autocomplete = ({
  articles,
  searchValue,
  onSearchChange,
  status,
}: AutocompleteProps) => {
  const renderMenu = (props: any, option: any) => {
    return articles && articles.length ? (
      <ListItem {...props} key={option.label}>
        <ListItemButton component={RouterLink} to={`/search/${option.label}`}>
          <ListItemText primary={option.label} />
        </ListItemButton>
      </ListItem>
    ) : (
      <></>
    );
  };

  return (
    <ReactAutocomplete
      options={articles}
      getOptionLabel={(option: any) => option.label}
      onChange={(event, newValue) => {
        console.log(newValue);
      }}
      inputValue={searchValue}
      onInputChange={(event, newInputValue) => {
        onSearchChange({ target: { value: newInputValue } });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search Wikipedia'
          variant='outlined'
          onChange={onSearchChange}
        />
      )}
      renderOption={renderMenu}
    />
  );
};

export default Autocomplete;
