import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserView, MobileView } from 'react-device-detect';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import DesktopApp from './DesktopApp';


ReactDOM.render(
  <React.StrictMode>
    <MobileView className="w-full h-full">
      <App />
    </MobileView>
    <BrowserView>
      <DesktopApp />
    </BrowserView>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();