import './App.css';
import LoginInterfaz from './Components/LoginInterfaz';
import './Style/PageLogin.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataProvider } from './Data/DataContext';

// COMPONENTS
import NavBar from './Components/NavBar/NavBar';
import Temas from './Components/Temas/Temas';

// PAGINAS
import PageHome from './Page/Home/PageHome';
import PagePerfil from './Page/Perfil/PagePerfil';
import PageInputsText from './Page/Inputs/PageInputsText';

import PageButtonsEnvio from './Page/Buttons/PageButtonsEnvio';

import Page100DaysCss from './Page/100DaysCss/Page100DaysCss';

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     navigate('/');
  //   } else {
  //     if (location.pathname == '/') {
  //       navigate('/home');
  //     }
  //   }
  // }, []);




  return (
    <DataProvider>
      <div className="App relative">
        {location.pathname !== '/' && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <div className="FondoBackColor w-full h-screen flex align-items-center justify-content-center">
                <LoginInterfaz />
              </div>
            }
          />
          <Route path="/home" element={<PageHome />} />
          <Route path="/inputs/text" element={<PageInputsText />} />
          <Route path="/button/envio" element={<PageButtonsEnvio />} />


          <Route path="/100-dias-css" element={<Page100DaysCss />} />

          <Route path="/Dashboard01" element={<div>404: Not Found</div>} />
          <Route path="/profile" element={<PagePerfil />} />
        </Routes>
        {location.pathname !== '/' && <Temas />}

      </div>
    </DataProvider>
  );
}

export default App;
