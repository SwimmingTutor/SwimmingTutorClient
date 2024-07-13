// App.jsx
import logo from './assets/images/logo.png';
import React from 'react';
import ExampleGraph from './components/ExampleGraph';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <ExampleGraph />
      <img src={logo} />;
    </div>
  );
}
export default App;
