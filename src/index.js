import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarContext } from './contexts/SidebarContext';
import { ThemeContext } from './contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<SidebarContext> 
  <ThemeContext>
    <Router> 
    <AuthContext>  
    <App />
    </AuthContext>
  </Router>
</ThemeContext>
</SidebarContext>
</React.StrictMode>
);