import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Counter from './components/Counter'


function App() {
  return (<div>
  <h1>Using Recoil</h1>
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
    </div>
  );
}

export default App;
