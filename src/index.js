import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/@emotion/styled/dist/emotion-styled.esm.js";
// import "./node_modules/@mui/system/esm/createStyled.js";
import './index.css';
// import { Provider } from 'react-redux';
// import App from './ImageApp/App';
// import store from './ImageApp/REDUX/Store/Store';
import HorizontalLinearStepper from './MultiStepsForms/HorizontalLinearStepper';
import MultistepContext from './MultiStepsForms/MultistepsContext/MultistepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MultistepContext>
       <HorizontalLinearStepper/>
     </MultistepContext>
  </React.StrictMode> 
);


/* <Provider store = {store}>
      <App/>
</Provider> */