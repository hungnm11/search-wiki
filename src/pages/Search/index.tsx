import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import Autocomplete from '../../components/Autocompletes/index';
import Container from '../../components/Container';
// import ListItem from '../../components/ListItem';
import { useSearch } from '../../hooks';
import { IChildrenProps } from '../../models';

const ListItem = lazy(() => import('../../components/ListItem'));

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
        {({ searchValue, onSearchChange, articles }: IChildrenProps) => (
          <Autocomplete
            articles={articles}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            // status={status}
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
