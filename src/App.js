import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Latest from './components/Latest';
import Featured from './components/Feaatured';
import Selling from './components/Selling';
import Add from './components/Add';
import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Header} exact />
        <Route path="/" component={Latest} exact />
        <Route path="/" component={Featured} exact />
        <Route path="/" component={Selling} exact />
        <Route path="/" component={Add} exact />
        <Route path="/" component={About} exact />
        <Route path="/" component={Feedback} exact />
        <Route path="/" component={Footer} exact />
        <Route path="/" component={Copyright} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
