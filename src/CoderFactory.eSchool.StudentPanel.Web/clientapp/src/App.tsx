import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/dashboard';
import { Box, Container, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';


function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Dashboard/>
        </React.Fragment>
    );
}

export default App;
