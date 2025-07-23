index.html
----------
<div id="root"></div>


App.js
------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My first React App</h1>
    </div>
  );
}

export function C2() {
  return (
    <div>
      <input type="button" value='Click' />
    </div>
  );
}

export function C3() {
  return (
    <div>
      C3SSSS
    </div>
  );
}

export default App;

//For one component we have to add export default fName
index.js
--------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { C2, C3 } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <C2/>
    <C3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

2.No Gap from top
-----------------
index.html
----------
<div id="root"></div>

App.js
------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      My first React App
    </div>
  );
}

export function C2() {
  return (
    <div>
      <input type="button" value='Click' />
    </div>
  );
}

export function C3() {
  return (
    <div>
      C3SSSS
    </div>
  );
}

export default App;

index.js
--------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { C2, C3 } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <C2/>
    <C3/>
  </React.StrictMode>
);

we can render components with root.render(<App/>) in index.js file

in single js file we can create n components but only one default component, default has to be there
for default components at the time of import we can give any reference name.
import App from './App'; 
or
import Appref from './App';

any one default export is fine

1.export default function App() {}
2.export default App;

Remaining are non default components
Reference name should be same, import { C2, C3 } from './App';
should be in {C2, C3}
import Appref, {C2, C3 } from './App';
or
import {C2, C3} from './App';
*** if we don't use {C2} it calls default component twice.

component latter should start with UpperCase

from "./fileName"
components are defined in js file so no need define file extensions

in function  return (only one root shoulbe there 
<div>
here we can define any num of div tags
</div>) 

not allowed 
function  return (only one root shoulbe there <div></div> <div></div>)