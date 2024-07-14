import Box from '@mui/material/Box';
import MUIContainer from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
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
    <MUIContainer maxWidth='md'>
      <CssBaseline />
      <Box>
        <Box>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
          >
            WikiPedia
          </Typography>
        </Box>
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
      </Box>
    </MUIContainer>
  );
};

export default SearchPage;
