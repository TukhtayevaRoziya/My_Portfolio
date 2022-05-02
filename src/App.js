import { Route, Routes } from 'react-router-dom';
import './App.css'
import PrimaryNav from './components/footer/LabelBottomNavigation';
import { Header } from './components/header/Header';
import { Resume } from './components/resume/Resume';
import { Skills } from './components/skills/Skills';
import { Project } from './components/project/Project';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/My_Portfolio' element={ <Header />} />
        <Route path='/resume' element={ <Resume />} />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/project' element={ <Project />} />
      </Routes>
      <PrimaryNav />
    </div>
  );
}

export default App;
