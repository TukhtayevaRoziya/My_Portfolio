import { Route, Routes } from 'react-router-dom';
import './App.css'
import PrimaryNav from './components/Footer/LabelBottomNavigation';
import { Header } from './components/Header/Header';
import { Resume } from './components/Resume/Resume';
import { Skills } from './components/Skills/Skills';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/My_Portfolio' element={ <Header />} />
        <Route path='/resume' element={ <Resume />} />
        <Route path='/skills' element={ <Skills />} />
      </Routes>
      <PrimaryNav />
    </div>
  );
}

export default App;
