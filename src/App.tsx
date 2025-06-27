import React from 'react';
import {Demo} from './pages/hero';
import Header from './components/header'


const App : React.FC = () => {
  return (
    <div>
      <Header/>
        <Demo/>
    </div>
  );
}

export default App;
