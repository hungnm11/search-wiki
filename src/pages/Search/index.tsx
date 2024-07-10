import { useParams } from 'react-router-dom';
import Autocomplete from '../../components/Autocompletes';
import Container from '../../components/Container';
import ListItem from '../../components/ListItem';
import { useSearch } from '../../hooks';

const SearchPage = ({ ...props }) => {
  let { id } = useParams<'id'>();
  const searchId = id || 'default';
  const { articles, status } = useSearch(searchId, 50);

  if (!articles.length && status === 'SUCCESS') {
    return <div>No articles for query: {searchId}</div>;
  }

  return (
    <div>
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
      {!articles.length && status === 'SUCCESS' ? (
        <div>No articles for query: {searchId}</div>
      ) : (
        articles.map((article) => {
          return <ListItem {...article} key={article.id} />;
        })
      )}
    </div>
  );
};

export default SearchPage;
