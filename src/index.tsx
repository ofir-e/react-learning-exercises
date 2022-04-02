import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const registerUnwantedError = (partialMessage: string) => {
  const oldConsoleError = console.error;
  console.error = (...data: any[]) => {
    const errorMessage = data.join('\n');
    if (!errorMessage.includes(partialMessage)) return oldConsoleError(...data);
    oldConsoleError(...data);
    ReactDOM.render(
      <div style={{ zIndex: 999, backgroundColor: 'red', width: '100%', height: '100%', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }} >
        <p>open f12 and fix the bugs!</p>
        <p>make sure there are no more red scary errors in console</p>
        <p>try reloading the page if you think you fixed the bug</p>
      </div>,
      document.getElementById('rootBlocker')
    );
  }
}

registerUnwantedError('Ex1Columns');
registerUnwantedError('React state update on an unmounted component');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
