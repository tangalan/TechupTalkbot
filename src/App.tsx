import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConsolePage } from './pages/ConsolePage';
import { StorytimeStacy } from './pages/StorytimeStacy';
import { ComradeCharlie } from './pages/ComradeCharlie';
import { BuddyBoba } from './pages/BuddyBoba';
import { Dashboard } from './pages/Dashboard';


function App() {
  // return (
  //   <div data-component="App">
  //     <ConsolePage />
  //   </div>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ConsolePage} />
        <Route path="/storytimestacy" Component={StorytimeStacy} />
        <Route path="/comradecharlie" Component={ComradeCharlie} />
        <Route path="/buddyboba" Component={BuddyBoba} />
        <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
