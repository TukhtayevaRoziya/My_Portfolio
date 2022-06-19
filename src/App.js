import { Route, Routes } from 'react-router-dom';
import PrimaryNav from './components/footer/LabelBottomNavigation';
import { Header } from './components/header/Header';
import { Resume } from './components/resume/Resume';
import { Skills } from './components/skills/Skills';
import { Project } from './components/project/Project';

import './App.css'
import { Language } from './components/language/Language';
import { Switch } from './components/switch/Switch';

const App = () => {

  return (
    <div className='App'>
      <h2 className='counter'>
        <Language />
        <Switch/>
        
    {/* <h1>{t('countryName')}</h1> */}
      
      </h2>

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
