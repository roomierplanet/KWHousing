import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

<Auth0Provider
                domain="kwhousing.us.auth0.com"
                clientId="g3U7PDYC5qAio68Sc1exsIiZK36j9Y8E"
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>, document.getElementById('root'));
