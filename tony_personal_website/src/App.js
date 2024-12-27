// import './App.css';
import MainLayout from './layouts/MainLayout';
import Homepage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import AboutMe from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import "./styles/index.css"
import { Route, Routes } from 'react-router';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div className="
        bg-beige
        dark:bg-teal">
          <MainLayout>

          <Routes>
            {/* Define each route */}
            <Route path="/" element={<Homepage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          {/* <Homepage/> */}
          {/* <CareerPage/>
          <PersonalPage/> */}
          {/* <AboutMe/> */}
          </MainLayout>
          
        </div>
  );
}

export default App;
