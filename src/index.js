import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Navbar/NavFile';
import NavOne from './Navbar/NavOne';
import ApiDataLearn from './components/ApiDataLearn';
import 'bootstrap/dist/css/bootstrap.min.css';
import OperatorsRef from './components/OpretorsRef';
import SlideJavaScript from './Navbar/slide';
import { SliderData } from './Navbar/SliderData';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NavBar /> */}
    {/* <NavOne /> */}
    {/* <ApiDataLearn /> */}
    {/* <OperatorsRef /> */}
    <SlideJavaScript slides={SliderData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
