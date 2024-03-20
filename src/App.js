import './App.css';
import React from 'react';

import {createBrowserRouter,RouterProvider,Link} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
  
])
  return (
    <div className="App">
      <Home />
    </div>
  );
}


export default App;
