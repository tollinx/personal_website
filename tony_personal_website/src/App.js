// import './App.css';
import MainLayout from './layouts/MainLayout';
import Homepage from './Pages/HomePage';
import CareerPage from './Pages/CareerPage';
import ProjectPage from './Pages/ProjectPage';
import AboutMe from './Pages/AboutPage';
import "./styles/index.css"

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div className="
        bg-beige
        dark:bg-teal">
          <MainLayout>
          <Homepage/>
          {/* <CareerPage/>
          <ProjectPage/>
          <PersonalPage/> */}
          <AboutMe/>
          </MainLayout>
        </div>
  );
}

export default App;
