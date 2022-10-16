
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Typography} from "@mui/material";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Contactlist from "./Contactlist";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        
    },
});


function App() {

  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router basename="/reactapp" >
              <Navbar />
              <Routes>
                  <Route path='/projects' element={<Typography variant="h5" component="div">
                      Projects
                  </Typography>} />
                  <Route path='/contact' element={<Contactlist />} />
                  <Route path='/posts' element={<Typography variant="h5" component="div">
                      Post
                  </Typography>} />
              </Routes>
          </Router>
      </ThemeProvider>
  );
}

export default App;
