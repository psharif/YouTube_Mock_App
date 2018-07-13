import React from 'react';
import ReactDOM from 'react-dom';

/// Youtube API Key - AIzaSyAU3i4DRpEuIq7CI50bgXN0BYnVYm59Nik
const API_KEY = 'AIzaSyAU3i4DRpEuIq7CI50bgXN0BYnVYm59Nik';

// Create a new component. This component should produce some HTML.

const App = () => <div>Hi!</div>;

// Take this component's generated HTML and put it on the page ( in the DOM)
ReactDOM.render(< App />, document.querySelector('.container'));
