import React from 'react';
import Dashboard from './pages/Dashoboard';
import './app.css';
import Header from './components/Header';
function App() {
  return (
    <>
    <Header/>
    <div className='App'>
      <Dashboard></Dashboard>
    </div>
    </>
  );
}

export default App;
