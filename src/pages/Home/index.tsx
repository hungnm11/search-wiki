import Box from '@mui/material/Box';
import MUIContainer from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Autocomplete from '../../components/Autocompletes/index';
import Container from '../../components/Container';

const HomePage = () => {
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
      </Box>
    </MUIContainer>
  );
};

export default HomePage;
