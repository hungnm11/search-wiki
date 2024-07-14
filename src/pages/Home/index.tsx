import Autocomplete from '../../components/Autocompletes/index';
import Container from '../../components/Container';

const HomePage = () => {
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

export default HomePage;
