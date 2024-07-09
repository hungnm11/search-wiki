import Autocomplete from './components/Autocompletes';
import Container from './components/Container';

const App = () => {
  return (
    <Container>
      {({
        searchValue,
        onSearchChange,
        articles,
      }: {
        searchValue: any;
        onSearchChange: any;
        articles: any;
      }) => (
        <Autocomplete
          articles={articles}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
        />
      )}
    </Container>
  );
};

export default App;
