import { React, useEffect } from 'react';

import logo from './logo.svg';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Businesses from './components/Businesses';
import Businessdetails from './components/Businessdetails';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global'
import getBusinesses from './actions/businesses';


import { ThemeProvider } from 'styled-components'
/**
 *   
 * @param {object} theme - The theme object
 * 
 */
const theme = {
  colors: {

    body: '#f9f9f9',

  },
  mobile: '768px',
}
/**
 * 
 * Main App component
 */
function App() {

  const dispatch = useDispatch();


  /**
   * dispatch an action to fetch businesses
   */
  useEffect(() => {
    dispatch(getBusinesses());

  }, [dispatch]);
  /**
   *  return  the app component
   */
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Container >

            <Routes>
              <Route path="/" exact element={<Businesses />} />
              <Route path="/business/:id" element={<Businessdetails />} />


              {/* <Route path="/posts/:id" exact component={PostDetails} /> */}

            </Routes>
          </Container>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
