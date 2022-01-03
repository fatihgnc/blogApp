import React from 'react';
import Router from './components/Router';
import UserContextProvider from './components/store/UserProvider';
import './index.css';

function App() {
    return (
        <UserContextProvider>
            <Router />
        </UserContextProvider>
    );
}

export default App;
