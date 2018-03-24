// React Modules
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Styles
import './index.css';

// Components
import App from './App';

ReactDOM.render(
<App />, 
document.getElementById('root'));
registerServiceWorker();
