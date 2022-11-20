import  React from 'react';
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import About from './pages/About';
import ResponsiveAppBar from './Navbar';

const App = () => {
  return (
    <div className='App'>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;

/** 
 * 
import { Typography, AppBar, CssBaseline, Toolbar, Container, Box } from '@mui/material';
import { IntegrationInstructions } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

<ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar postion="relative">
          <Toolbar>
            <IntegrationInstructions />
            <Typography variant="h6">Celigo</Typography>
          </Toolbar>
        </AppBar>
        <HomePage />
      </ThemeProvider> */