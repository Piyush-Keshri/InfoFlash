import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';

function App() {
  return (

    <Box>
      <Header />
      <InfoHeader />
      <Articles />
    </Box>
  );
}

export default App;
