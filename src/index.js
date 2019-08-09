// React
import React from 'react';
import ReactDOM from 'react-dom';
//React Router Dom
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootStore from './stores/root-store';
// Material UI 
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Page
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
// CSS Custom 
import './assets/css/index.css';
//Config Materail UI Color 
const theme = createMuiTheme({
    typography: {
        useNextVariants: true, 
        fontSize: 14, 
    },
    palette: {
        primary: {
            light: '#B2EBF2',
            main: '#00BCD4',
            dark: '#0097A7', 
            contrastText: '#fff'
        }, 
        secondary:{
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25', 
            contrastText: '#fff'
        },
        background: {
            default: '#eee'
        }
    }, 
    overrides: {

    }
});



ReactDOM.render(
    <Provider store={rootStore}>
        <Router>
            <React.Fragment>
                <CssBaseline />
                {/* The rest of your application */}
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </React.Fragment>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
