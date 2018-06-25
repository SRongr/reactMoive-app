import React from 'react';        
import ReactDOM from 'react-dom';  
import './normalize.css'
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './../src/routes/common.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
